import Grid2 from '@mui/material/Unstable_Grid2'
import { ReactElement } from 'react'
import { SelectButton } from '../SelectButton'

interface Props {
  config: { img: string; text: string; selected?: boolean; onClick?: () => void }[]
}

export function SelectButtonGroup({ config }: Props): ReactElement {
  return (
    <Grid2 container spacing={4} justifyContent='center'>
      {config.map(({ text, img, selected, onClick }) => (
        <Grid2 key={text}>
          <SelectButton text={text} img={img} selected={selected} onClick={onClick} />
        </Grid2>
      ))}
    </Grid2>
  )
}
