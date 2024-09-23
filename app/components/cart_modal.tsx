'use client'
import { Modal, Box, Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/redux/store'
import { resetShoppingCart } from '../lib/redux/shoppingCartReducer'
import { setBalance } from '../lib/redux/balanceReducer'
import { setProducts } from '../lib/redux/productReducer'
interface CartModalProps {
  open: boolean
  handleClose: () => void
}

const CartModal: React.FC<CartModalProps> = ({ open, handleClose }) => {
  const products = useSelector((state: RootState) => state.products.items)
  const shoppingCart = useSelector((state: RootState) => state.shoppingCart.selectedProducts)
  const balance = useSelector((state: RootState) => state.balance.balance)
  const totalPrice = shoppingCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )

  const dispatch = useDispatch()

  let error = ''

  if (balance < totalPrice)
    error = 'Please insert credit! Your balance is less then the total price.'

  shoppingCart.forEach(selectedProduct => {
    const index = products.findIndex(product => product.label === selectedProduct.label)

    if (selectedProduct.quantity > products[index].quantity) {
      error = `Product: ${selectedProduct.label} available quantity is less than the selected quantity.`
    }
  })

  const handlePurchase = () => {
    dispatch(
      setProducts(
        products.map(product => {
          const index = shoppingCart.findIndex(selected => selected.label === product.label)
          if (index !== -1) {
            return { ...product, quantity: product.quantity - shoppingCart[index].quantity }
          }
          return product
        })
      )
    )
    dispatch(resetShoppingCart())
    dispatch(setBalance(balance - totalPrice))
    handleClose()
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ bgcolor: 'background.paper', padding: 4, width: 400, margin: 'auto', mt: '15vh' }}>
        <Typography variant="h6" component="h2">
          Shopping Cart
        </Typography>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
        <Box sx={{ mt: 2 }}>
          {shoppingCart.map(product => (
            <Box
              key={product.label}
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
            >
              <Typography>{product.label}</Typography>
              <Typography>
                {product.quantity} x ${product.price.toFixed(2)} = $
                {(product.quantity * product.price).toFixed(2)}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Total: ${totalPrice.toFixed(2)}
        </Typography>
        <Button
          disabled={!!error}
          variant="contained"
          color="primary"
          onClick={() => handlePurchase()}
          sx={{ mt: 2 }}
        >
          Purchase
        </Button>
      </Box>
    </Modal>
  )
}

export default CartModal
