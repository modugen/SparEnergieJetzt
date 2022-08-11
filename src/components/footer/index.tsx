import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'

const links = [
  {
    title: 'Impressm',
    link: '',
  },
  {
    title: 'Datenschuz',
    link: '',
  },
  {
    title: 'Newsletter',
    link: '',
  },
  {
    title: 'kontakt',
    link: '',
  },
]

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      flexWrap='wrap'
      height={theme.spacing(10)}
      display='flex'
      alignItems='center'
      justifyContent='space-around'
      sx={{ backgroundColor: theme.palette.grey[900] }}
    >
      <Typography variant='caption' color={theme.palette.grey[200]}>
        © 2022 ModuGen GmbH. All rights reserved.
      </Typography>
      <Stack direction='row' spacing={2}>
        {links.map(({ link, title }, index) => (
          <Link
            style={{ color: theme.palette.common.white, textDecoration: 'none' }}
            key={index}
            to={link}
          >
            {title}
          </Link>
        ))}
      </Stack>
    </Box>
  )
}

export default Footer
