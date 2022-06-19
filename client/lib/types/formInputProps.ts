import { supervisor } from './userType'

export interface FormInputProps {
  name: string
  control: any
  label: string
  setValue?: any
  supervisors?: supervisor[]
}

// i probably could have put more interfaces and types in here
