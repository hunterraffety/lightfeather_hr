import Navbar from '../components/Navbar/Navbar'
import { getUsers } from '../lib/api/getUsers'
import { supervisor } from '../lib/types/userType'
import styles from './showUsers.module.scss'
interface SupervisorProps {
  supervisors: supervisor[]
}

// let's make some neat cards for our LEADERS
const showUsers = (props: SupervisorProps) => {
  const { supervisors } = props
  return (
    <div className={styles.userContainer}>
      <Navbar />
      {supervisors.map(supervisor => {
        return (
          <div className={styles.supervisorProfile} key={supervisor.id}>
            <div className={styles.bio}>
              <p>
                Supervisor name: {supervisor.firstName} {supervisor.lastName}
              </p>
              <p>Jurisdiction: {supervisor.jurisdiction}</p>
              Phone: {supervisor.phone}
            </div>
            <div className={styles.photo}>
              <img src="https://placedog.net/350/150" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default showUsers

export async function getStaticProps() {
  const supervisors = await getUsers()
  return {
    props: {
      supervisors,
    },
  }
}
