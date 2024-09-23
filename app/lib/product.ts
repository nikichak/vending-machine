import { ProductType } from './product_types'

export interface Product {
  label: string
  type: ProductType
  quantity: number
  price: number
  isAvailable: boolean
}

export const Products: Product[] = [
  {
    label: 'Croissant',
    type: ProductType.SWEETY,
    quantity: 15,
    isAvailable: true,
    price: 1.5
  },
  {
    label: 'Chocolate',
    type: ProductType.SWEETY,
    quantity: 7,
    isAvailable: true,
    price: 2.2
  },
  {
    label: 'Waffle',
    type: ProductType.SWEETY,
    quantity: 3,
    isAvailable: true,
    price: 0.5
  },
  {
    label: 'Cheese Burger',
    type: ProductType.SALTY,
    quantity: 8,
    isAvailable: true,
    price: 5.5
  },
  {
    label: 'Ham Sandwich',
    type: ProductType.SALTY,
    quantity: 15,
    isAvailable: true,
    price: 4
  },
  {
    label: 'Chips Lays',
    type: ProductType.SALTY,
    quantity: 10,
    isAvailable: true,
    price: 3.5
  },
  {
    label: 'Coka Cola',
    type: ProductType.DRINKY,
    quantity: 15,
    isAvailable: true,
    price: 2
  },
  { label: 'Sprite', type: ProductType.DRINKY, quantity: 2, isAvailable: true, price: 2 },
  { label: 'Water', type: ProductType.DRINKY, quantity: 6, isAvailable: true, price: 0.9 }
]
