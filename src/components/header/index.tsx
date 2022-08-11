import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material'
import logo from '../../assets/icons/modugen-log.svg'
import { Link } from 'react-router-dom'

function Header() {
  const theme = useTheme()

  return (
    <Box marginBottom={theme.spacing(8)} sx={{ display: 'flex' }}>
      <AppBar sx={{ backgroundColor: theme.palette.common.white }} component='nav'>
        <Toolbar>
          <Link to='/'>
            <img style={{ width: theme.spacing(5) }} src={logo} />
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
