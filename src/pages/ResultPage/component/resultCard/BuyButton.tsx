import { Box, useTheme } from '@mui/material'
import React from 'react'
import { BuyButton } from '../styled'

const BuyButtons = () => {
  const theme = useTheme()

  return (
    <Box display='flex' justifyContent='flex-end'>
      <BuyButton sx={{ marginRight: theme.spacing(1) }}>kaufen</BuyButton>
      <BuyButton>kaufen</BuyButton>
    </Box>
  )
}

export default BuyButtons
