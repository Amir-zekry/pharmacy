'use server'
import { sql } from '@vercel/postgres';
import { revalidatePath, revalidateTag, unstable_noStore } from 'next/cache';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import getUserId from './auth';
import { cookies } from 'next/headers';

export async function getTotalPages() {
  unstable_noStore()
  const data = await sql`SELECT * FROM noon_products`
  return data.rowCount
}

// export async function tryGetProducts() {
//   unstable_noStore()
//   const data = await sql`SELECT * FROM noon_products limit 1`
//   return data.rows
// }

export async function getProducts(query, currentPage, sort, filters) {
  const offset = (currentPage - 1) * 8;
  const data = await sql`
    SELECT *
    FROM noon_products
    WHERE
      name ILIKE ${`%${query}%`}
    GROUP BY 
      id, name, category, price
    HAVING 
    CASE WHEN ${filters} = 'all' OR ${filters} = '' THEN true ELSE category = ${filters} END
    ORDER BY 
      CASE WHEN ${sort} = 'name' THEN name::text END ASC,
      CASE WHEN ${sort} = 'category' THEN category::text END ASC,
      CASE WHEN ${sort} = 'price' THEN price::numeric END ASC,
      CASE WHEN ${sort} = 'price desc' THEN price::numeric END DESC
    LIMIT 8 OFFSET ${offset}
  `;
  return data.rows;
}

export async function getBestSellers() {
  unstable_noStore();
  const data = await sql`SELECT * FROM noon_products ORDER BY count DESC LIMIT 4`;
  return data.rows;
}

export async function getCartProducts() {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)
  unstable_noStore();
  const data = await sql`
    SELECT * FROM noon_cart
    where user_id = ${user_id}
    ORDER BY added_at DESC
  `;
  return data.rows;
}

export async function pushProducts(formData) {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)
  // Check if the product already exists in the cart
  const existingProduct = await sql`
    SELECT product_id 
    FROM noon_cart 
    WHERE 
    product_id = ${formData.get('product_id')} AND user_id = ${user_id}
  `;

  // If the product doesn't exist, insert it into the cart
  if (existingProduct.rows.length === 0) {
    await sql`
      INSERT INTO noon_cart (
        product_name, 
        product_price, 
        product_category, 
        product_image, 
        product_id,
        user_id,
        product_quantity
      )
      VALUES (
        ${formData.get('product_name')}, 
        ${formData.get('product_price')}, 
        ${formData.get('product_category')}, 
        ${formData.get('product_image')}, 
        ${formData.get('product_id')},
        ${user_id},
        ${formData.get('product_quantity')}
      )
    `;
  }
  revalidateTag('noon_cart');
}

export async function removeProduct(productId) {
  await sql`DELETE FROM noon_cart WHERE product_id = ${productId}`;
  revalidateTag('noon_cart');
}

export async function getCartTotalPrice() {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)
  const data = await sql`
    SELECT COALESCE(SUM(product_price * product_quantity), 0) as total_price FROM noon_cart
    WHERE user_id = ${user_id} 
  `;
  return data.rows[0].total_price;
}

export async function quantityIncrement(productId) {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)

  await sql`
    UPDATE noon_cart
    SET product_quantity = product_quantity + 1
    WHERE product_id = ${productId} AND user_id = ${user_id}
  `;
  revalidateTag('noon_cart');
}

export async function quantityDecrement(productId) {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)
  const result = await sql`SELECT product_quantity FROM noon_cart WHERE product_id = ${productId}`
  const quantity = result.rows[0]?.product_quantity;
  if (quantity > 1) {
    await sql`
    UPDATE noon_cart
    SET product_quantity = product_quantity - 1
    WHERE product_id = ${productId} AND user_id = ${user_id}
  `;
    revalidateTag('noon_cart');
  }
}

export async function pushIntoOrders(formData, products) {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)
  const result = await sql`
    INSERT INTO noon_orders (
      user_id,
      first_name,
      last_name,
      email,
      phone_number,
      zip_code,
      shipping_address,
      total_amount,
      payment_method
    ) VALUES (
      ${user_id},
      ${formData.get("first_name")},
      ${formData.get("last_name")},
      ${formData.get("email")},
      ${formData.get("phone_number")},
      ${formData.get("zip_code")},
      ${formData.get("shipping_address")},
      ${formData.get('total_price')},
      ${formData.get('payment_method')}
    )
    RETURNING order_id;
  `;
  const order_id = result.rows[0]?.order_id;

  for (let i = 0; i < products.length; i++) {
    await sql`
      INSERT INTO noon_order_items (
        order_id,
        product_id,
        product_name,
        price,
        quantity,
        order_image
      ) VALUES (
        ${order_id},
        ${products[i].product_id},
        ${products[i].product_name},
        ${products[i].product_price},
        ${products[i].product_quantity},
        ${products[i].product_image}
      );
    `;
  }

  await sql`DELETE FROM noon_cart WHERE user_id = ${user_id}`;
  revalidateTag('noon_cart');
  redirect('/cart/checkout/order_summary');
}

export async function getLastOrder() {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)
  const data = await sql`
    SELECT * FROM noon_orders
    WHERE user_id = ${user_id}  ORDER BY order_id DESC LIMIT 1
  `;
  return data.rows;
}

export async function getLastOrderItems() {
  const data = await sql`
    SELECT * FROM noon_order_items
    WHERE order_id = (SELECT order_id FROM noon_orders ORDER BY order_id DESC LIMIT 1)
    ORDER BY order_id DESC
  `;
  return data.rows;
}

export async function getCartProductsCount() {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)
  const data = await sql`
    SELECT * FROM noon_cart
    WHERE user_id = ${user_id}
  `;
  return data.rowCount;
}

export async function IncreasePurchaseCount(id) {
  await sql`
    UPDATE noon_products
    SET count = count + 1
    WHERE id = ${id}
  `;
}

export async function getUserOrders() {
  const session = await getServerSession(authOptions); // Get session
  const user_id = await getUserId(session); // Get user ID (email or guest ID)
  const data = await sql`
    SELECT * FROM noon_orders WHERE user_id = ${user_id} ORDER BY created_at DESC
  `;
  return data.rows;
}

export async function getOrderDetails(id) {
  const data = await sql`
    SELECT * FROM noon_orders
    WHERE order_id = ${id}
  `;
  return data.rows;
}

export async function getOrderDetailsItems(id) {
  const data = await sql`
    SELECT * FROM noon_order_items
    WHERE order_id = ${id}
  `;
  return data.rows;
}

export async function cancelOrder(order_id) {
  await sql`
    UPDATE noon_orders SET status = 'Canceled' WHERE order_id = ${order_id}
  `;
  revalidatePath('/orders');
}

export async function getGuestId() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Default to localhost if undefined

  const res = await fetch(`${baseUrl}/api/guest-id`, {
    cache: "no-store",
    credentials: "include", // Ensure cookies are included
  });

  const data = await res.json();
  return data.guestId;
}

export async function gettingGuestId() {
  const cookieStore = await cookies();
  const guest_id = cookieStore.get('guest_id')?.value;
  return guest_id;
}

const randomValue = Math.random().toString(36).substring(2, 15);

export async function settingGuestId() {
  const cookieStore = await cookies();
  cookieStore.set('guest_id', randomValue);
}