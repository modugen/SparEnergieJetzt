import { Button } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
// import { BuyButton } from '../styled'

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
    gtag('event', 'conversion', {
      // eslint-disable-next-line camelcase
      send_to: 'AW-10949782711/YHtpCJ3K6tEDELfZoeUo',
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
          <Button onClick={() => gtagReportConversion(link.link as unknown as Location)}>
            hello
          </Button>
          {/* <BuyButton variant='body1' href={link.link} onClick={() => gtagReportConversion(link.link as unknown as Location)}>
            {link.provider}
          </BuyButton> */}
        </Grid2>
      ))}
    </Grid2>
  )
}

export default BuyButtons
