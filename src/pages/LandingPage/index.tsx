import { Stack } from '@mui/system'
import { Button, InputAdornment, OutlinedInput, Typography } from '@mui/material'
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
        <div>
          <Typography variant='h3' textAlign='center'>
            Energiekrise sinnvoll bewältigen
          </Typography>
          <Typography variant='subtitle1' textAlign='center'>
            Konfigurieren Sie sich jetzt Ihre Einsparmaßnahmen passend zu Ihrem Gebäuden und tun Sie
            dabei der Umwelt und Ihrem Geldbeutel etwas Gutes!
          </Typography>
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
        </div>

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
          <Grid2>
            <Typography variant='h3' textAlign='center'>
              Früher
            </Typography>
            <Center>
              <OutlinedInput
                value={currentCost}
                type='number'
                endAdornment={<InputAdornment position='end'>€</InputAdornment>}
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  'aria-label': 'weight',
                }}
                size='small'
                disabled
              />
            </Center>
            <Typography variant='subtitle1'>
              letzten Winter bezahltest du etwa 100€/Heizperiode
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant='h3' textAlign='center'>
              In Zukunft
            </Typography>
            <Center>
              <OutlinedInput
                value={futureCost}
                type='number'
                endAdornment={<InputAdornment position='end'>€</InputAdornment>}
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  'aria-label': 'weight',
                }}
                size='small'
                disabled
              />
            </Center>
            <Typography variant='subtitle1'>
              nächsten Winter bezahlst du 100€/Heizperiode
            </Typography>
          </Grid2>
        </Grid2>

        <Typography color={red[500]} textAlign='center'>
          Du kannst bis zu <b>2000€</b> pro Heizperiode sparen
        </Typography>

        <Center>
          <Link to='/configurator/step-1' style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Jetzt Konfigurieren</Button>
          </Link>
        </Center>
      </LandingPageSection>

      <LandingPageSection style={{ backgroundColor: '#F4F4F4' }}>
        <Typography variant='h3' textAlign='center'>
          Warum jetzt?
        </Typography>
        <Center>
          <img src={chartImg} style={{ maxWidth: '100%' }} />
        </Center>
      </LandingPageSection>

      <LandingPageSection>
        <Center>
          <Link to='/configurator/step-1' style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Jetzt Konfigurieren</Button>
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
