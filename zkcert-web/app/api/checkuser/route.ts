// pages/api/checkuser.js
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { STATUS_MSG } from '../../utils/constants'; // Ensure this path is correct

export async function POST(request: Request) {
    try {
        const { walletAddress } = await request.json();
        if (!walletAddress) {
            return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 });
        }

        const userExists = await sql`
            SELECT * FROM users WHERE user_address = ${walletAddress};
        `;

        if (userExists.rowCount === 0) {
            const newUser = await sql`
                INSERT INTO users (user_address, verified) VALUES (${walletAddress}, false) RETURNING *;
            `;
            return NextResponse.json(newUser.rows[0], { status: 201 });
        } else {
            return NextResponse.json({ message: 'Wallet address already exists' }, { status: 200 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error', details: error }, { status: 500 });
    }
}
