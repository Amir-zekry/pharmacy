'use server'
import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';

export async function getProducts(query, currentPage, sort, filters) {
    unstable_noStore()
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