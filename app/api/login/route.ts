import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { username, password } = await req.json()

  // Ini cuma contoh dummy. Nanti diganti cek ke database.
  if (username === 'admin' && password === '123') {
    return NextResponse.json({ message: 'Login berhasil' })
  }

  return NextResponse.json(
    { message: 'Username atau password salah' },
    { status: 401 }
  )
}