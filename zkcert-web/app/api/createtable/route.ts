import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const result = await sql`
            ALTER TABLE science_papers (
                article varchar(255),
                abstract text,
                author varchar(255),
                DOI varchar(255),
                ISSN varchar(255),
                journal varchar(255),
                keywords text,
                month varchar(255),
                number varchar(255),
                pages varchar(255),
                pmid varchar(255),
                publisher varchar(255),
                title varchar(255),
                url varchar(255),
                volume varchar(255),
                year varchar(255),
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
