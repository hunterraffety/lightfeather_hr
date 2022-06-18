import { supervisor } from './userType'

export interface FormInputProps {
  name: string
  control: any
  label: string
  setValue?: any
  supervisors?: supervisor[]
}
