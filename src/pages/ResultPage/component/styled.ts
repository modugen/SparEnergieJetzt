import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { theme } from '../../../styles'

export const BuyButton = styled(Button)({
  border: `${theme.spacing(0.3)} solid ${theme.palette.primary.main}`,
  marginRight: theme.spacing(1),
})
