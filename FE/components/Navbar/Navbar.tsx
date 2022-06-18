import Link from 'next/link'
import { COPY } from '../../lib/constants'
import styles from './Navbar.module.scss'

// greeting from hook not required but nice to see cuz i know you care about me :)
interface NavbarProps {
  greeting?: any
}

const Navbar = (props: NavbarProps) => {
  const { greeting } = props
  return (
    <div className={styles.navbar}>
      <span className={styles.headerText}>
        <Link href="/" className={styles.link}>
          <span className={styles.linkText}>{COPY.NOTIFICATION_FORM}</span>
        </Link>
      </span>
      <span className={styles.subText}>{greeting ? greeting : ''}</span>
    </div>
  )
}

export default Navbar
