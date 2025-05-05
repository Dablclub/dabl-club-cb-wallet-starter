import { NextResponse } from 'next/server'

export async function POST() {
  try {
    // TODO: Implement account creation
    return NextResponse.json(
      { account: '0x0000000000000000000000000000000000000000' },
      { status: 200 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
