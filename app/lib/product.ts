import { ProductType } from './product_types'

export interface Product {
  label: string
  type: ProductType
  quantity: number
  price: number
  isAvailable: boolean
  icon: any
}

export const Products: Product[] = [
  {
    label: 'Croissant',
    type: ProductType.SWEETY,
    quantity: 15,
    isAvailable: true,
    icon: '',
    price: 1.5
  },
  {
    label: 'Chocolate',
    type: ProductType.SWEETY,
    quantity: 7,
    isAvailable: true,
    icon: '',
    price: 2.2
  },
  {
    label: 'Waffle',
    type: ProductType.SWEETY,
    quantity: 3,
    isAvailable: true,
    icon: '',
    price: 0.5
  },
  {
    label: 'Cheese Burger',
    type: ProductType.SALTY,
    quantity: 8,
    isAvailable: true,
    icon: '',
    price: 5.5
  },
  {
    label: 'Ham Sandwich',
    type: ProductType.SALTY,
    quantity: 15,
    isAvailable: true,
    icon: '',
    price: 4
  },
  {
    label: 'Chips Lays',
    type: ProductType.SALTY,
    quantity: 10,
    isAvailable: true,
    icon: '',
    price: 3.5
  },
  {
    label: 'Coka Cola',
    type: ProductType.DRINKY,
    quantity: 15,
    isAvailable: true,
    icon: '',
    price: 2
  },
  { label: 'Sprite', type: ProductType.DRINKY, quantity: 2, isAvailable: true, icon: '', price: 2 },
  { label: 'Water', type: ProductType.DRINKY, quantity: 6, isAvailable: true, icon: '', price: 0.9 }
]
