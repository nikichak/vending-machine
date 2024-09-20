import { Card as MuiCard, CardContent, CardMedia, Typography, Button, Box } from '@mui/material'
import { Product } from '../lib/product'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { label, price, quantity } = product
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
      </CardContent>
      <Box sx={{ textAlign: 'center', p: 1 }}>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </Box>
    </MuiCard>
  )
}

export default ProductCard
