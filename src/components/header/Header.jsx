import {Filter} from '../filter/Filter'
import {Search} from '../search/Search'
import styles from './header.module.css'

export const Header = () => {
  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div className={styles.containerIcons}>
            <Search />
          </div>
          <div className={styles.containerIcons}>
            <Filter />
          </div>
        </div>
      </nav>
      <header>
        <div className={styles.container}>
          <img
            src='./../public/assets/logo.png'
            alt='imagen del logo oficial de dragon ball super'
          />
          <h1 className='title'>Prueba del Dragon</h1>
        </div>

        <div className={styles.containerTitle}></div>
      </header>
    </>
  )
}
