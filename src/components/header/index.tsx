import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material'
import logo from '../../assets/icons/modugen-log.svg'

function Header() {
  const theme = useTheme()

  return (
    <Box marginBottom={theme.spacing(10)} sx={{ display: 'flex' }}>
      <AppBar sx={{ backgroundColor: theme.palette.grey[100] }} component='nav'>
        <Toolbar>
          <img style={{ width: theme.spacing(5) }} src={logo} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
