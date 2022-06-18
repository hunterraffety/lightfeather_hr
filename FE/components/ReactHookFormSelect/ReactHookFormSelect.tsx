import { MenuItem, Select } from '@mui/material'
import { COPY } from '../../lib/constants'

interface ReactHookFormSelectProps {
  label: string
  name: string
  placeholder: string
}

const ReactHookFormSelect = (props: ReactHookFormSelectProps) => {
  const { label, name, placeholder } = props
  return (
    <>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        // value={age}
        defaultValue={placeholder}
        label="Age"
        // onChange={handleChange}
      >
        <MenuItem value="">
          <em>{COPY.SELECT}</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  )
}

export default ReactHookFormSelect
