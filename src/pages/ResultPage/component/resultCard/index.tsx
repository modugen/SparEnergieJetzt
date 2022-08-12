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

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm') || theme.breakpoints.down('xs'))

  return (
    <ResultCardContainer width={isSmallScreen ? '95vw' : '55vw'}>
      <Grid container direction='row'>
        <Grid item lg={4} md={2} xs={4}>
          <CardMedia
            component='img'
            style={{ width: '100%', height: isSmallScreen ? theme.spacing(22) : theme.spacing(25) }}
            image={result.image}
          />
        </Grid>
        <Grid padding={theme.spacing(1.5)} item lg={8} md={10} xs={8}>
          <Stack>
            <Box
              alignItems='center'
              justifyContent='space-between'
              display='flex'
              flexDirection={isSmallScreen ? 'column' : 'row'}
            >
              <Typography textAlign={'center'} variant={isSmallScreen ? 'body1' : 'h5'}>
                <b>{result.title}</b>
              </Typography>
              <Typography
                textAlign='start'
                color={theme.palette.grey[800]}
                variant={isSmallScreen ? 'body1' : 'h5'}
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
              justifyContent={isSmallScreen ? 'flex-start' : 'flex-end'}
              display='flex'
              flexDirection='row'
            >
              <Typography color={theme.palette.grey[800]} variant={isSmallScreen ? 'body2' : 'h6'}>
                {'Kostet nur '}
                <b style={{ color: theme.palette.primary.main, opacity: 0.9 }}>65$</b>
              </Typography>
            </Box>
            <Collapse
              sx={{ marginTop: theme.spacing(1) }}
              in={descriptionColsaped}
              collapsedSize={isSmallScreen ? 20 : 40}
            >
              <Typography
                color={!descriptionColsaped ? theme.palette.grey[500] : theme.palette.grey[800]}
              >
                {result.description}
              </Typography>
              {isSmallScreen && <BuyButtons />}
            </Collapse>
            <Box display='flex' justifyContent='center'>
              <IconButton onClick={() => setDescriptionColsaped(!descriptionColsaped)}>
                {!descriptionColsaped ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
            </Box>
            {!isSmallScreen && <BuyButtons />}
          </Stack>
        </Grid>
      </Grid>
    </ResultCardContainer>
  )
}

export default ResultCard
