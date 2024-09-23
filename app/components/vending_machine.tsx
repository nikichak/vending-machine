'use client'
import Header from './header'
import { Product } from '../lib/product'
import { useEffect, useState } from 'react'
import { ProductType } from '../lib/product_types'
import { Badge, Fab, Grid2 } from '@mui/material'
import ProductCard from './product_card'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/redux/store'
import { setProducts } from '../lib/redux/productReducer'
import { ShoppingCart } from '@mui/icons-material'
import CartModal from './cart_modal'

interface Props {
  initialProducts: Product[]
}

const VendingMachine: React.FC<Props> = ({ initialProducts }) => {
  const [productType, setProductType] = useState<ProductType>(ProductType.ALL)
  const [purchaseModalOpen, setPurchaseModalOpen] = useState<boolean>(false)

  const dispatch = useDispatch()

  const products = useSelector((state: RootState) => state.products.items)
  const shoppingCart = useSelector((state: RootState) => state.shoppingCart.selectedProducts)

  useEffect(() => {
    dispatch(setProducts(initialProducts))
  }, [dispatch, initialProducts])

  return (
    <>
      <Header type={productType} setType={setProductType} />
      <Grid2 container spacing={2}>
        {products?.map((product: Product) => (
          <Grid2 key={product.label} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
      <Fab
        color="primary"
        onClick={() => setPurchaseModalOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        <Badge
          badgeContent={shoppingCart.reduce((value, acc) => value + acc.quantity, 0)}
          color="error"
          sx={{
            '.MuiBadge-badge': {
              fontSize: '1rem'
            }
          }}
        >
          <ShoppingCart />
        </Badge>
      </Fab>
      <CartModal
        open={purchaseModalOpen}
        handleClose={() => setPurchaseModalOpen(false)}
      />
    </>
  )
}

export default VendingMachine
