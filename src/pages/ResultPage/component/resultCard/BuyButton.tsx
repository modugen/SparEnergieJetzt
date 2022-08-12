import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import { BuyButton } from '../styled'

const BuyButtons = ({ links }: { links: {
  provider: string
  link: string
}[] }) => {
  return (
    <Grid2 container spacing={1} display='flex' justifyContent='flex-end'>
      {links.map((link) => (
        <Grid2 key={link.provider}>
          <BuyButton variant='body1' href={link.link}>
            {link.provider}
          </BuyButton>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default BuyButtons
