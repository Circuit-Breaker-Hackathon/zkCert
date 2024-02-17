// File to create API route to update the 'verified' status of a user based on their address

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { STATUS_MSG } from '../../utils/constants';

export async function POST(request: Request) {
    try {
        const { walletAddress } = await request.json();

        const result = await sql`
            UPDATE users SET Verified = true WHERE User_address = ${walletAddress};
        `;

        return NextResponse.json({ result: STATUS_MSG.SUCCEEDED }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: STATUS_MSG.FAILED, error }, { status: 500 });
    }
}
