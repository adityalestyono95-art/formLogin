import { NextResponse } from 'next/server'

const users = [
  { id: 1, username: 'budi' },
  { id: 2, username: 'siti' },
  { id: 3, username: 'andi' },
]

export async function GET() {
  return NextResponse.json(users)
}