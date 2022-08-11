import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import { theme } from '../../../styles'

export const BuyButton = styled(Button)({
  border: `${theme.spacing(0.3)} solid ${theme.palette.primary.main}`,
  marginRight: theme.spacing(1),
})

export const ResultCardContainer = styled(Box)({
  minHeight: theme.spacing(20),
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
})
