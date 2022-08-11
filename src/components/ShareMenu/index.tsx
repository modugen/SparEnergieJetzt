import { Fab } from '@mui/material'
import React, { ReactElement } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import { isFunction } from 'lodash'

const SPARENERGIE_LINK = 'https://sparenergie.jetzt'
// const SHARE_TEXT = `Schaue jetzt wie du deine Ausgaben für Energie senken kannst. ${SPARENERGIE_LINK}`

const data = {
  title: 'Energiesparen mit SparEnergie.jetzt',
  text: 'Schaue jetzt wie du deine Ausgaben für Energie senken kannst.',
  url: SPARENERGIE_LINK,
}

export function ShareMenu(): ReactElement {
  // const [open, setOpen] = useState(false)
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)

  return (
    <>
      {isFunction(window.navigator.share) && (
        <Fab
          color='primary'
          aria-label='add'
          sx={{ position: 'fixed', bottom: 24, right: 24 }}
          onClick={() => window.navigator.share(data)}
        >
          <ShareIcon />
        </Fab>
      )}
    </>
  )

  // return (
  //   <>
  //   <Button onClick={() => window.navigator.share(data)}>share</Button>
  //     <Backdrop open={open} />
  //     <SpeedDial
  //       ariaLabel='SpeedDial basic example'
  //       sx={{ position: 'fixed', bottom: 24, right: 24 }}
  //       icon={<ShareIcon />}
  //       onClose={handleClose}
  //       onOpen={handleOpen}
  //       open={open}
  //     >
  //       <SpeedDialAction tooltipOpen icon={<FacebookIcon />} tooltipTitle='Facebook' />
  //       <SpeedDialAction tooltipOpen icon={<TwitterIcon />} tooltipTitle='Twitter' onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsparenergie.jetzt%2F&amp;src=sdkpreparse')} />
  //       <SpeedDialAction tooltipOpen icon={<WhatsAppIcon />} tooltipTitle='WhatsApp' onClick={() => window.open(`whatsapp://send?text=${SHARE_TEXT}`)} />
  //     </SpeedDial>
  //   </>
  // )
}
