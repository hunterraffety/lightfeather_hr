import { COPY } from '../../lib/constants'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p>{COPY.NOTIFICATION_FORM}</p>
    </div>
  )
}

export default Navbar
