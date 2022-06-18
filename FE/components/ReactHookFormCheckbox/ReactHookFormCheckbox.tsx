import { Checkbox } from '@mui/material'
// wrapper component for checkboxes but they're not required so who minds
interface ReactHookFormCheckboxProps {
  label?: string
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
