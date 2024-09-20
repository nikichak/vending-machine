import { BakeryDining, LocalBar, LocalPizza, RestaurantMenu } from '@mui/icons-material'

export enum ProductType {
  ALL = 'ALL',
  SALTY = 'SALTY',
  SWEETY = 'SWEETY',
  DRINKY = 'DRINKY'
}

export const ProductTypeDefinition: { [key in ProductType]: { label: string; icon: any } } = {
  [ProductType.ALL]: {
    label: 'All',
    icon: <RestaurantMenu />
  },
  [ProductType.SALTY]: {
    label: 'Salty',
    icon: <LocalPizza />
  },
  [ProductType.SWEETY]: {
    label: 'Sweety',
    icon: <BakeryDining />
  },
  [ProductType.DRINKY]: {
    label: 'Drinky',
    icon: <LocalBar />
  }
}
