import { Backdrop, Button, Fab, SpeedDial, SpeedDialAction } from '@mui/material'
import React, { ReactElement, useState } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { isFunction } from 'lodash'

const SPARENERGIE_LINK = 'https://sparenergie.jetzt'
const SHARE_TEXT = `Schaue jetzt wie du deine Ausgaben für Energie senken kannst. ${SPARENERGIE_LINK}`

const data = {
  title: 'Energiesparen mit SparEnergie.jetzt',
  text: 'Schaue jetzt wie du deine Ausgaben für Energie senken kannst.',
  url: SPARENERGIE_LINK,
}

export function ShareMenu(): ReactElement {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  if (isFunction(window.navigator.share)) {
    return (
      <Fab
        color='primary'
        aria-label='add'
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        onClick={() => window.navigator.share(data)}
      >
        <ShareIcon />
      </Fab>
    )
  }

  return (
    <>
      <Button onClick={() => window.navigator.share(data)}>share</Button>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel='SpeedDial basic example'
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        icon={<ShareIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          tooltipOpen
          icon={<FacebookIcon />}
          tooltipTitle='Facebook'
          onClick={() =>
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsparenergie.jetzt%2F&amp;src=sdkpreparse',
            )
          }
        />
        <SpeedDialAction
          tooltipOpen
          icon={<TwitterIcon />}
          tooltipTitle='Twitter'
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${SHARE_TEXT}`)}
        />
        <SpeedDialAction
          tooltipOpen
          icon={<WhatsAppIcon />}
          tooltipTitle='WhatsApp'
          onClick={() => window.open(`https://api.whatsapp.com/send?text=${SHARE_TEXT}`)}
        />
      </SpeedDial>
    </>
  )
}
