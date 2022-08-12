import { Stack } from '@mui/system'
import { Box, Button, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import React, { ReactElement, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Grid2 from '@mui/material/Unstable_Grid2'
import { red } from '@mui/material/colors'
import { SelectButton } from '../../components/SelectButton'
import { LandingPageSection } from './components/LandingPageSection'
import { Center } from '../../components/Center'

// images
import chartImg from '../../images/chart_placeholder.png'
import jacqelineBrettImg from '../../images/jacqueline-brett.png'
import altbauImg from '../../images/building_type/altbau.png'
import altbauSaniertImg from '../../images/building_type/altbau_saniert.png'
import neubauImg from '../../images/building_type/neubau.png'
import { useConfiguratorStore } from '../../stores/configuratorStore'
import { ShareMenu } from '../../components/ShareMenu'
import { Bausubstanz, calcEffectiveHeatingCost, Heizungsart } from '../../calc'
import { useResultConfiguration } from '../../hooks/useResultConfiguration'
import { round } from 'lodash-es'
import { BigChip } from '../../components/BigChip'

export function LandingPage(): ReactElement {
  const { squareMeters, setSquareMeters, buildingType, setBuildingType } = useConfiguratorStore()

  const resultConfig = useResultConfiguration()

  const currentCost = useMemo(
    () =>
      round(
        calcEffectiveHeatingCost({
          ...resultConfig,
          heizungsart: Heizungsart.Gas,
          energieEinheitsKosten: new Map<Heizungsart, number>([[Heizungsart.Gas, 0.06]]),
        }),
        0,
      ),
    [resultConfig],
  )

  const futureCost = useMemo(
    () =>
      round(
        calcEffectiveHeatingCost({
          ...resultConfig,
          heizungsart: Heizungsart.Gas,
        }),
        0,
      ),
    [resultConfig],
  )

  return (
    <Stack
      direction='column'
      // This is needed as the grid gets somehow a bit bigger than the screen
      // width
      style={{ overflowX: 'hidden' }}
    >
      <LandingPageSection>
        <Grid2 container spacing={2} direction='column'>
          <Grid2>
            <Typography variant='h3' textAlign='center'>
              Die Energiekrise sinnvoll bewältigen
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant='subtitle1' textAlign='center'>
              Konfigurieren Sie Ihre Sparmaßnahmen passend zu Ihrem Gebäude und finden Sie heraus,
              wie Sie effektiv Energie sparen können.
            </Typography>
          </Grid2>
          <Grid2>
            <Center>
              <OutlinedInput
                value={squareMeters}
                type='number'
                onChange={(e) => setSquareMeters(parseFloat(e.target.value))}
                endAdornment={<InputAdornment position='end'>m²</InputAdornment>}
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  'aria-label': 'weight',
                }}
                size='small'
                style={{ alignSelf: 'center' }}
              />
            </Center>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={4} justifyContent='center'>
          <Grid2>
            <SelectButton
              text='Altbau'
              img={altbauImg}
              selected={buildingType === Bausubstanz.Altbau}
              onClick={() => setBuildingType(Bausubstanz.Altbau)}
            />
          </Grid2>
          <Grid2>
            <SelectButton
              text='Altbau saniert'
              img={altbauSaniertImg}
              selected={buildingType === Bausubstanz.AltbauSaniert}
              onClick={() => setBuildingType(Bausubstanz.AltbauSaniert)}
            />
          </Grid2>
          <Grid2>
            <SelectButton
              text='Neubau'
              img={neubauImg}
              selected={buildingType === Bausubstanz.Neubau}
              onClick={() => setBuildingType(Bausubstanz.Neubau)}
            />
          </Grid2>
        </Grid2>

        <Grid2 container justifyContent='center' spacing={2}>
          <Grid2 spacing={2} direction='column'>
            <Grid2>
              <Typography variant='h3' textAlign='center' display='block'>
                Heizkosten Aktuell
              </Typography>
            </Grid2>

            <Grid2>
              <Center>
                <BigChip>{`${currentCost}€`}</BigChip>
              </Center>
            </Grid2>
            <Grid2>
              <Typography variant='subtitle1' textAlign='center'>
                pro Heizperiode
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 spacing={2} direction='column'>
            <Grid2>
              <Typography variant='h3' textAlign='center'>
                Heizkosten In Zukunft
              </Typography>
            </Grid2>
            <Grid2>
              <Center>
                <BigChip>{`${futureCost}€`}</BigChip>
              </Center>
            </Grid2>
            <Grid2>
              <Typography variant='subtitle1' textAlign='center'>
                pro Heizperiode
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>

        <Typography color={red[500]} textAlign='center' variant='h5'>
          Bei einer Einsparung von 20% kannst du bis zu{' '}
          <b>{round(futureCost * 0.2, 0)}€</b> pro Heizperiode sparen
        </Typography>

        <Center>
          <Link to='/configurator/step-1' style={{ textDecoration: 'none' }}>
            <Button variant='contained' size='large'>
              Jetzt Einsparungen ermitteln
            </Button>
          </Link>
        </Center>
      </LandingPageSection>

      <LandingPageSection style={{ backgroundColor: '#F4F4F4' }}>
        <Typography variant='h3' textAlign='center'>
          Warum jetzt?
        </Typography>
        <Typography variant='body1' textAlign='center'>
          Die Energiepreise steigen stark an. Im Vergleich zu den Vorjahren werden besonders
          gasbetriebene Heizungen mindestens viermal teuerer. Es ist so wichtig wie nie,
          energiesparend zu heizen. Heizkosten sparen bei steigenden Preisen bedeutet, dass der
          Verbrauch gesenkt werden muss. Mit dem SparEnergie Konfigurator findest du schnell heraus,
          welche Sparmaßnahmen für dich am effektivsten sind.
        </Typography>
        <Center>
          <Box sx={{ maxWidth: { sm: '100%', md: 1200 } }}>
            <img src={chartImg} style={{ maxWidth: '100%' }} />
          </Box>
        </Center>
      </LandingPageSection>

      <LandingPageSection>
        <Center>
          <Link to='/configurator/step-1' style={{ textDecoration: 'none' }}>
            <Button variant='contained' size='large'>
              Jetzt Einsparungen ermitteln
            </Button>
          </Link>
        </Center>

        <Grid2 container justifyContent='center' alignItems='center' spacing={4}>
          <Grid2>
            <Typography>
              Jacqueline Brett sparte mit dem Kofigurator 700,32€ per Heizperiode bei
              Investitionskosten von 280,00€
            </Typography>
          </Grid2>
          <Grid2>
            <img src={jacqelineBrettImg} style={{ borderRadius: 100 }} />
          </Grid2>
        </Grid2>
      </LandingPageSection>
      <ShareMenu />
    </Stack>
  )
}
