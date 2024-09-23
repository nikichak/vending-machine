import { Products } from '@/app/lib/product'
import { ProductType } from '@/app/lib/product_types'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const type = searchParams.get('type')

  let products = Products

  if (type && type !== ProductType.ALL) products = products.filter(product => product.type === type)

  return NextResponse.json(
    { products },
    {
      status: 200
    }
  )
}
