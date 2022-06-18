import { Checkbox } from '@mui/material'

interface ReactHookFormCheckboxProps {
  label: string
  name: string
}

const ReactHookFormCheckbox = (props: ReactHookFormCheckboxProps) => {
  const { name } = props
  return (
    <>
      <Checkbox name={name ?? ''} />
    </>
  )
}

export default ReactHookFormCheckbox
