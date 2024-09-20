'use client'
import Header from './header'
import { Product } from '../lib/product'
import useSWR from 'swr'
import { useState } from 'react'
import { ProductType } from '../lib/product_types'
import { fetchGet } from '../lib/fetch'
import { Grid2 } from '@mui/material'
import ProductCard from './product_card'

const VendingMachine: React.FC = () => {
  const [productType, setProductType] = useState<ProductType>(ProductType.ALL)
  const { data, isValidating, error } = useSWR<{ products: Product[] }>(
    `/api/products?type=${productType ? productType : ''}`,
    fetchGet
  )

  if (!data?.products) return

  // TODO add spinner when the data is not loaded
  return (
    <>
      <Header type={productType} setType={setProductType} />
      <Grid2 container spacing={2}>
        {data?.products?.map(product => (
          <Grid2 key={product.label} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
            {/* Pass product properties to the ProductCard */}
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </>
  )
}

export default VendingMachine
