/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { accessToken } = await req.json();

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    return NextResponse.json({}, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
