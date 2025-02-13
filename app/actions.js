'use server'
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function getProducts() {
    const data = await sql`SELECT * FROM noon_products`;
    console.log(data)
    return data
}
