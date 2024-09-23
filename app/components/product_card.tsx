'use client'
import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  TextField
} from '@mui/material'
import { Product } from '../lib/product'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToShoppingCart, removeFromShoppingCart } from '../lib/redux/shoppingCartReducer'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { label, price, quantity } = product
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const dispatch = useDispatch()

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(Number(event.target.value), quantity))
    setSelectedQuantity(value)
  }

  const handleAddToCart = () =>{
    console.log('TUKAAA CARD')
    dispatch(
      addToShoppingCart({
        label,
        quantity: selectedQuantity,
        price
      })
    )
  }

  const handleRemoveFromCart = () =>
    dispatch(
      removeFromShoppingCart({
        label,
        quantity: selectedQuantity,
        price
      })
    )

  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={'favicon.ico'} alt={label} />
      <CardContent>
        <Typography variant="h6" component="div">
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {quantity}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <TextField
            label="Qty"
            type="number"
            value={selectedQuantity}
            onChange={handleQuantityChange}
            inputProps={{ min: 1, max: quantity, style: { textAlign: 'center' } }}
            size="small"
            sx={{ width: 80, mr: 2 }}
          />
          <Typography variant="body2" color="text.secondary">
            Total: ${(price * selectedQuantity).toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ textAlign: 'center', p: 1 }}>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <Button variant="outlined" color="error" onClick={handleRemoveFromCart} sx={{ ml: 2 }}>
          Remove
        </Button>
      </Box>
    </MuiCard>
  )
}

export default ProductCard
