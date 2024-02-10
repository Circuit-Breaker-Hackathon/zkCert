import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { STATUS_MSG } from '../../utils/constants';

export async function DELETE(request: Request) {
    try {
        const searchParams = new URLSearchParams(new URL(request.url).search);
        const id = searchParams.get('id');
        
        await sql`
            DELETE FROM comments WHERE Id = ${id};
        `;
        
        return NextResponse.json({ result: STATUS_MSG.SUCCEEDED }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
