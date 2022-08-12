import { Box, useTheme } from '@mui/material'
import React from 'react'
import { BuyButton } from '../styled'

const BuyButtons = ({ link }: { link: string }) => {
  const theme = useTheme()

  return (
    <Box display='flex' justifyContent='flex-end'>
      <BuyButton variant='body1' href={link} style={{ marginRight: theme.spacing(1) }}>
        kaufen
      </BuyButton>
      <BuyButton variant='body1' href={link}>
        kaufen
      </BuyButton>
    </Box>
  )
}

export default BuyButtons
