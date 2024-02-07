// file to create api route to retrieve papers from the database and search them

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const result = await sql`SELECT * FROM science_papers;`;
        
        return NextResponse.json({ result: result.rows }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}

