import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // TODO: Implement account listing
    return NextResponse.json({ accounts: [] })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
