import { Grid, Box, useTheme, Typography, Collapse, IconButton, useMediaQuery } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { ResultProposal } from '../../constant'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import BuyButtons from './BuyButton'
import { ResultCardContainer } from '../styled'
import { round } from 'lodash-es'
import CardMedia from '@mui/material/CardMedia'

interface Props {
  result: ResultProposal
  savedValue: number
}

const ResultCard = ({ result, savedValue }: Props) => {
  const theme = useTheme()
  const [descriptionColsaped, setDescriptionColsaped] = useState(false)

  const isMidDownScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <ResultCardContainer width={isMidDownScreen ? '95vw' : '55vw'}>
      <Grid container direction='row'>
        <Grid item lg={4} sm={4} xs={4}>
          <CardMedia
            component='img'
            style={{
              width: '100%',
              height: isMidDownScreen ? theme.spacing(22) : theme.spacing(26),
            }}
            image={result.image}
          />
        </Grid>
        <Grid padding={theme.spacing(1.5)} item lg={8} sm={8} xs={8}>
          <Stack>
            <Box
              alignItems={isMidDownScreen ? 'left' : 'center'}
              justifyContent='space-between'
              display='flex'
              flexDirection={isMidDownScreen ? 'column' : 'row'}
            >
              <Typography textAlign={'left'} variant={isMidDownScreen ? 'body1' : 'h5'}>
                <b>{result.title}</b>
              </Typography>
              <Typography
                textAlign='start'
                color={theme.palette.grey[800]}
                variant={isMidDownScreen ? 'body1' : 'h5'}
              >
                <b>{'Spare bis zu: '}</b>
                <b
                  style={{
                    color: theme.palette.primary.main,
                    opacity: 0.9,
                    fontSize: theme.spacing(3),
                  }}
                >
                  {round(savedValue, 2)}€
                </b>
              </Typography>
            </Box>
            <Box
              justifyContent={isMidDownScreen ? 'flex-start' : 'flex-end'}
              display='flex'
              flexDirection='row'
            >
              <Typography
                color={theme.palette.grey[800]}
                variant={isMidDownScreen ? 'body2' : 'h6'}
              >
                {'Kostet nur '}
                <b style={{ color: theme.palette.primary.main, opacity: 0.9 }}>65$</b>
              </Typography>
            </Box>
            <Collapse
              sx={{ marginTop: theme.spacing(1) }}
              in={descriptionColsaped}
              collapsedSize={isMidDownScreen ? 20 : 40}
            >
              <Typography
                color={!descriptionColsaped ? theme.palette.grey[500] : theme.palette.grey[800]}
              >
                {result.description}
              </Typography>
              {isMidDownScreen && <BuyButtons />}
            </Collapse>
            <Box display='flex' justifyContent='center'>
              <IconButton onClick={() => setDescriptionColsaped(!descriptionColsaped)}>
                {!descriptionColsaped ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
            </Box>
            {!isMidDownScreen && <BuyButtons />}
          </Stack>
        </Grid>
      </Grid>
    </ResultCardContainer>
  )
}

export default ResultCard
