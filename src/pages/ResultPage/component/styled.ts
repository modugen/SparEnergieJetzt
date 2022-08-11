import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import { theme } from '../../../styles'

export const BuyButton = styled(Button)({
  marginRight: theme.spacing(1),
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  boxShadow: `${theme.palette.primary.main} 0px 2px 2px`,
  transition: 'opacity 1s',
  '&:hover': {
    background: theme.palette.primary.main,
    opacity: 0.8
  }
})

export const ResultCardContainer = styled(Box)({
  minHeight: theme.spacing(20),
  // marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  boxShadow: 'rgb(0 0 0 / 25%) 0px 4px 4px',
  backgroundColor: theme.palette.common.white
})
