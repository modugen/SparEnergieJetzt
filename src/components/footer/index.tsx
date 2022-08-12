import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Stack } from '@mui/system'

const links = [
  {
    title: 'Impressum',
    link: '/',
  },
  {
    title: 'Datenschutz',
    link: '/',
  },
  {
    title: 'Newsletter',
    link: '',
  },
  {
    title: 'kontakt',
    link: '/',
  },
  {
    title: 'Blog',
    link: 'https://blog.sparenergie.jetzt',
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
          <a
            style={{ color: theme.palette.common.white, textDecoration: 'none' }}
            key={index}
            href={link}
          >
            <Typography>{title}</Typography>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default Footer
