import { NextRequest, NextResponse } from 'next/server'
import { isAddress } from 'viem'

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get('address')

  if (!address || !isAddress(address)) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 })
  }

  try {
    // TODO: Implement testnet ETH request

    return NextResponse.json(
      { transactionHash: '0x0000000000000000000000000000000000000000' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error requesting testnet ETH:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
