import {Link} from 'react-router-dom'
import styles from './card.module.css'
import {DragonBallContext} from '../../context/DragonBallContext'
import {useContext} from 'react'

export const Card = () => {
  const {characters} = useContext(DragonBallContext)
  return (
    <div className={styles.containerMain}>
      {characters.map((item) => (
        <div className={styles.cardContainer} key={item.id}>
          <div className={styles.card}>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{item.name}</h2>
              <p className={styles.cardText}>Universo {item.universe}</p>
            </div>

            <div className={styles.cardImage}>
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className={styles.btn}>
              <Link to={`/characters/${item.name}`}>
                <button>Ver ficha</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
