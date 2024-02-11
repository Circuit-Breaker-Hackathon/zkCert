// api to get article data based of doi
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const doi = url.searchParams.get('doi');

        if (!doi) {
            return NextResponse.json({ error: 'DOI is required' }, { status: 400 });
        }

        const result = await sql`
            SELECT * FROM science_papers WHERE doi = ${doi};
        `;

        if (result.rows.length > 0) {
            return NextResponse.json({ article: result.rows[0] }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }
    } catch (error) {
        console.error(error); // It's a good practice to log errors for debugging.
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
