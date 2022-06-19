import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { supervisor } from '../../lib/types/userType'
import { orderBy } from 'lodash'
import { FC } from 'react'
import { FormInputProps } from '../../lib/types/formInputProps'
import { Controller } from 'react-hook-form'
import { COPY } from '../../lib/constants'

// wrapper component to grab and populate select values

const ReactHookFormSelect: FC<FormInputProps> = ({
  name,
  control,
  supervisors,
}) => {
  // sorting the supervisors because you said so
  const sortedSupervisors = orderBy(
    supervisors,
    ['jurisdiction', 'lastName', 'firstName'],
    ['asc']
  )

  // function to generate our dudes and populate dropdown -- imagine if i could do this with money in my bank account. give me a job!
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
            {/* see this is where that money stuff would be handy */}
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
