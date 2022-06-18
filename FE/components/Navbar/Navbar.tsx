import { COPY } from '../../lib/constants'
import styles from './Navbar.module.scss'

interface NavbarProps {
  greeting: any
}

const Navbar = (props: NavbarProps) => {
  const { greeting } = props
  return (
    <div className={styles.navbar}>
      <span className="m-0">{COPY.NOTIFICATION_FORM}</span>
      <span className="m-0">{greeting}</span>
    </div>
  )
}

export default Navbar
