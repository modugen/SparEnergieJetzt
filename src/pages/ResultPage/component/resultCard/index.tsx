import { Grid, Box, useTheme, Typography, Collapse, IconButton, useMediaQuery } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { ResultProposal } from '../../constant'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import BuyButtons from './BuyButton'
import { ResultCardContainer } from '../styled'

interface Props {
  result: ResultProposal
}

const ResultCard = ({ result }: Props) => {
  const theme = useTheme()
  const [descriptionColsaped, setDescriptionColsaped] = useState(false)

  const isSMallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ResultCardContainer width={isSMallScreen ? '90vw' : '55vw'} >
      <Grid container direction='row'>
        <Grid item lg={4} md={2} xs={3}>
          <img style={{ width: '90%', height: theme.spacing(20) }} src={result.image} />
        </Grid>
        <Grid item lg={8} md={10} xs={9}>
          <Stack>
            <Box justifyContent='space-between' display='flex' flexDirection='row'>
              <Typography variant='h5'>{result.title}</Typography>
              <Typography variant='h6'>
                {'Spare bis zu: '}
                <span style={{ color: theme.palette.primary.main, fontSize: theme.spacing(3) }}>
                  300$
                </span>
              </Typography>
            </Box>
            <Box justifyContent='flex-end' display='flex' flexDirection='row'>
              <Typography variant='h6'>
                {'Kostet nur '}
                <span style={{ color: theme.palette.primary.main }}>65$</span>
              </Typography>
            </Box>
            <Collapse
              sx={{ marginTop: theme.spacing(1) }}
              in={descriptionColsaped}
              collapsedSize={40}
            >
              <Typography>{result.description}</Typography>
              {isSMallScreen && <BuyButtons />}
            </Collapse>
            <Box display='flex' justifyContent='center'>
              <IconButton onClick={() => setDescriptionColsaped(!descriptionColsaped)}>
                {!descriptionColsaped ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
            </Box>
            {!isSMallScreen && <BuyButtons />}
          </Stack>
        </Grid>
      </Grid>
    </ResultCardContainer>
  )
}

export default ResultCard
