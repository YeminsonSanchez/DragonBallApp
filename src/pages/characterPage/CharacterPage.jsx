import {useNavigate, useParams} from 'react-router-dom'
import styles from './characterPage.module.css'
import axios from 'axios'
import {useEffect, useState} from 'react'


export const CharacterPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const {characterName} = useParams()
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://dragon-ball-super-api.herokuapp.com/api/characters/' +
          characterName,
      )
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onNavigateBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles.characterMainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headercont}>
          <div className={styles.back} onClick={onNavigateBack}>
            <i className={'fa fa-arrow-left'}></i>
            Ir al inicio
          </div>
          <div className={styles.img}>
            <img
              src='./../public/assets/logo.png'
              alt='imagen del logo oficial de dragon ball super'
            />
          </div>
        </div>
      </div>

      <div
        className={(styles.characterContainer, 'animate__fadeInLeft')}
        key={data.id}
      >
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src={data.imageUrl} alt={data.name} />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.nameCharacter}>
              <h3>{data.name}</h3>
            </div>
            <div className={styles.universeCharacter}>
              <h3>Universo {data.universe}</h3>
            </div>
            <div className={styles.description}>
              <div className={styles.titleDescription}>Role</div>
              <div className={styles.detail}>{data.role}</div>
            </div>
            <div className={styles.description}>
              <div className={styles.titleDescription}>Status</div>
              <div className={styles.detail}>{data.status}</div>
            </div>
            <div className={styles.description}>
              <div className={styles.titleDescription}>OriginPlanet</div>
              <div className={styles.detail}>{data.originplanet}</div>
            </div>
            <div className={styles.description}>
              <div className={styles.titleDescription}>transform</div>
              <div className={styles.detail}>{data.transform}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
