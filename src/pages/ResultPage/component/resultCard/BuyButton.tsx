import { Box } from '@mui/material'
import React from 'react'
import { BuyButton } from '../styled'

const BuyButtons = () => {
  return (
    <Box display='flex' justifyContent='flex-end'>
      <BuyButton>kaufen</BuyButton>
      <BuyButton>kaufen</BuyButton>
    </Box>
  )
}

export default BuyButtons
