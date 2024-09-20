'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import { ProductType, ProductTypeDefinition } from '../lib/product_types'
import { grey } from '@mui/material/colors'

interface Props {
  type: ProductType
  setType: (type: ProductType) => void
}

export const Header: React.FC<Props> = ({ type, setType }) => {
  const [showDrawer, setShowDrawer] = React.useState<boolean>()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowDrawer(!showDrawer)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vending Machine
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <List>
          {Object.values(ProductType).map((key: ProductType) => (
            <ListItem key={ProductTypeDefinition[key].label} disablePadding>
              <ListItemButton
                onClick={() => setType(key)}
                sx={key === type ? { backgroundColor: grey[500] } : {}}
              >
                <ListItemIcon>{ProductTypeDefinition[key].icon}</ListItemIcon>
                <ListItemText primary={ProductTypeDefinition[key].label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default Header
