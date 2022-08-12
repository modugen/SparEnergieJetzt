import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import { BuyButton } from '../styled'

const BuyButtons = ({ links }: { links: string[] }) => {
  return (
    <Grid2 container display='flex' justifyContent='flex-end' spacing={1}>
      {links.map(link => (
        <Grid2 key={link} >
          <BuyButton variant='body1' href={link}>
            kaufen
          </BuyButton>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default BuyButtons
