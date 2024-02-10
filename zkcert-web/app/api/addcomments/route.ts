// file to create api route to retrieve papers from the database and search them

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { STATUS_MSG } from '../../utils/constants';

export async function POST(request: Request) {
    try {
        const input = await request.json();
        const timestamp = new Date();
        
        const result = await sql`
            INSERT INTO comments (Doi, Comment_content, Timestamp, User_address)
            VALUES (${input.Doi}, ${input.Comment_content}, ${timestamp.toISOString()}, ${input.User_address});
        `;
        
        return NextResponse.json({ result: STATUS_MSG.SUCCEEDED }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: STATUS_MSG.FAILED, error }, { status: 500 });
    }
}
