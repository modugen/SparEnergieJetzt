import { Backdrop, SpeedDial, SpeedDialAction } from '@mui/material'
import React, { ReactElement, useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import ShareIcon from '@mui/icons-material/Share'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export function ShareMenu(): ReactElement {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel='SpeedDial basic example'
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<ShareIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction icon={<FacebookIcon />} tooltipTitle='Facebook' />
        <SpeedDialAction icon={<TwitterIcon />} tooltipTitle='Twitter' />
        <SpeedDialAction icon={<WhatsAppIcon />} tooltipTitle='WhatsApp' />
      </SpeedDial>
    </>
  )
}
