import Grid2 from '@mui/material/Unstable_Grid2'
import { ReactElement } from 'react'
import { SelectButton } from '../SelectButton'

type SelectButtonProps = React.ComponentProps<typeof SelectButton>

interface Props {
  config: SelectButtonProps[]
}

export function SelectButtonGroup({ config }: Props): ReactElement {
  return (
    <Grid2 container spacing={4} justifyContent='center'>
      {config.map((selectButtonConfig) => (
        <Grid2 key={selectButtonConfig.text} xs={config.length >= 4 ? 6 : undefined} md={3}>
          <SelectButton {...selectButtonConfig} />
        </Grid2>
      ))}
    </Grid2>
  )
}
