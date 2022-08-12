import styled from '@emotion/styled'
import { Box, Link } from '@mui/material'
import { theme } from '../../../styles'

export const BuyButton = styled(Link)({
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  textDecoration: 'none',
  padding: theme.spacing(1),
  borderRadius: 3,
  boxShadow: `${theme.palette.primary.main} 0px 2px 2px`,
  transition: 'opacity 1s',
  '&:hover': {
    background: theme.palette.primary.main,
    opacity: 0.8,
  },
})

export const ResultCardContainer = styled(Box)({
  // marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(1),
  // padding: theme.spacing(1),
  boxShadow: 'rgb(0 0 0 / 25%) 0px 4px 4px',
  backgroundColor: theme.palette.common.white,
  overflow: 'hidden',
})
