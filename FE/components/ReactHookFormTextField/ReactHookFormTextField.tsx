import { TextField } from '@mui/material'
import React from 'react'

interface ReactHookFormTextFieldProps {
  label: string
  name: string
}

const ReactHookFormTextField = (props: ReactHookFormTextFieldProps) => {
  const { label, name } = props
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        name={name}
      />
    </>
  )
}

export default ReactHookFormTextField
