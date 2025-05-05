import { isAddress } from 'viem'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams
  const fromAddress = searchParams.get('fromAddress')
  const toAddress = searchParams.get('toAddress')
  const amount = searchParams.get('amount') || '0.000001'

  if (!fromAddress || !isAddress(fromAddress)) {
    return NextResponse.json(
      { error: 'From address is required' },
      { status: 400 },
    )
  }

  if (!toAddress || !isAddress(toAddress)) {
    return NextResponse.json(
      { error: 'To address is required' },
      { status: 400 },
    )
  }

  try {
    // TODO: Implement transaction sending

    return NextResponse.json(
      {
        transactionHash: '0x0000000000000000000000000000000000000000',
        amount,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
