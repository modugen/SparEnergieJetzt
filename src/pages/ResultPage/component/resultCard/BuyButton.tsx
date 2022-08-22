import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import { BuyButton } from '../styled'

const BuyButtons = ({
  links,
}: {
  links: {
    provider: string
    link: string
  }[]
}) => {
  const gtagReportConversion = (url: (string | Location) & Location) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gtag('event', 'click_external_buy_link', {
      // eslint-disable-next-line camelcase
      event_callback: () => {
        if (typeof url != 'undefined') {
          window.location = url
        }
      },
    })
    return false
  }

  return (
    <Grid2 container spacing={1} display='flex' justifyContent='flex-end'>
      {links.map((link) => (
        <Grid2 key={link.provider}>
          <BuyButton
            variant='body1'
            onClick={() => gtagReportConversion(link.link as unknown as Location)}
            sx={{
              cursor: 'pointer',
            }}
          >
            {link.provider}
          </BuyButton>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default BuyButtons
