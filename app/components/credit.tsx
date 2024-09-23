import { Modal, Box, Typography, IconButton, TextField, MenuItem, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { Currency } from '../lib/currency'
import { addBalance } from '../lib/redux/balanceReducer'
import { useDispatch } from 'react-redux'

interface Props {
  open: boolean
  handleClose: () => void
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90vw', md: 400 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
}

const Credit: React.FC<Props> = ({ open, handleClose }) => {
  const [amount, setAmount] = useState<number>(0)
  const [currency, setCurrency] = useState<string>(Currency.USD)
  const [error, setError] = useState<string>()

  const dispatch = useDispatch()

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(e.target.value)
    setError('')
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: 'center', mb: 2 }}
        >
          Add Credit
        </Typography>

        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          select
          label="Currency"
          value={currency}
          onChange={handleCurrencyChange}
          sx={{ mb: 2 }}
        >
          {Object.values(Currency).map(currency => (
            <MenuItem value={currency} key={currency}>
              {currency}
            </MenuItem>
          ))}
        </TextField>
        {error && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            if (currency !== Currency.USD) {
              setError('The vending machine supportes only USD.')
            } else {
              dispatch(addBalance(amount))
              setTimeout(() => handleClose(), 1000)
            }
          }}
        >
          Add Credit
        </Button>
      </Box>
    </Modal>
  )
}

export default Credit
