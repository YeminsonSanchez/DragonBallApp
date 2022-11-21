import {Card} from '../../components/card/Card'
import {Header} from '../../components/header/Header'

import styles from './homePage.module.css'

export const HomePage = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <main>
        <Card />
      </main>
    </div>
  )
}
