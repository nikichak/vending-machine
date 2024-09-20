import { Products } from '@/app/lib/product'
import { ProductType } from '@/app/lib/product_types'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest) {
  const type = req.query?.type

  let products = Products

  if (type && type !== ProductType.ALL) products = products.filter(product => product.type === type)

  return NextResponse.json(
    { products },
    {
      status: 200
    }
  )
}
