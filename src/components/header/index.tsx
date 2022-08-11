import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material'
import logo from '../../assets/icons/modugen-log.svg'
import { Link } from 'react-router-dom'
import { usePortalStore } from '../../stores/portalStore'
import { Center } from '../Center'

function Header() {
  const theme = useTheme()

  const setHeaderPortalRoot = usePortalStore((state) => state.setHeaderPortalRoot)

  return (
    <Box marginBottom={theme.spacing(8)} sx={{ display: 'flex' }}>
      <AppBar sx={{ backgroundColor: theme.palette.common.white }} component='nav'>
        <Toolbar style={{ display: 'flex', gap: 2 }}>
          <Link to='/'>
            <img style={{ width: theme.spacing(5) }} src={logo} />
          </Link>
          <Center style={{ flexGrow: 1 }}>
            <div id='portal-root' ref={(ref) => setHeaderPortalRoot(ref)} />
          </Center>
          <Box sx={{minWidth: '40px' }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
