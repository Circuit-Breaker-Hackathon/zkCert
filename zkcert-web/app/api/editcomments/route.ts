import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { STATUS_MSG } from '../../utils/constants';

export async function PUT(request: Request) {
    try {
        const { id, updatedContent } = await request.json();

        await sql`
            UPDATE comments SET Comment_content = ${updatedContent} WHERE Id = ${id};
        `;
        
        return NextResponse.json({ result: STATUS_MSG.SUCCEEDED }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
