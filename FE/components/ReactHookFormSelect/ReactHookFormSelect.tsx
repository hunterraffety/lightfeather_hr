import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { supervisor } from '../../lib/types/userType'
import { orderBy } from 'lodash'
import { FC } from 'react'
import { FormInputProps } from '../../lib/types/formInputProps'
import { Controller } from 'react-hook-form'
import { COPY } from '../../lib/constants'

const ReactHookFormSelect: FC<FormInputProps> = ({
  name,
  control,
  supervisors,
}) => {
  const sortedSupervisors = orderBy(
    supervisors,
    ['jurisdiction', 'lastName', 'firstName'],
    ['asc']
  )

  const generateSupervisors = () => {
    return sortedSupervisors.map((supervisor: supervisor) => {
      return (
        <MenuItem
          key={supervisor.identificationNumber}
          value={supervisor.identificationNumber}
        >
          {`${supervisor.jurisdiction} - ${supervisor.lastName}, ${supervisor.firstName}`}
        </MenuItem>
      )
    })
  }

  return (
    <FormControl fullWidth>
      <p>{COPY.SUPERVISOR}</p>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select
            onChange={onChange}
            value={value}
            variant="standard"
            displayEmpty
            renderValue={value !== '' ? undefined : () => COPY.SELECT}
          >
            {generateSupervisors()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  )
}

export default ReactHookFormSelect
