import {Search} from '../../components/search/Search'
import styles from './universePage.module.css'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {DragonBallContext} from '../../context/DragonBallContext'
import {useContext} from 'react'

export const UniversePage = () => {
  const {universeNumber} = useParams()

  const {characters} = useContext(DragonBallContext)
  const filterCharacters = characters.filter((item) => {
    if (item.universe === universeNumber) {
      return item
    }
  })

  const navigate = useNavigate()

  const handleFilter = (e) => {
    const universe = e.target.value
    console.log(universe)
    if (universe == 'all') {
      navigate('*/')
    } else {
      navigate(`/universes/${universe}`)
    }
  }

  return (
    <div className={styles.mainContainer}>
      <nav>
        <div className={styles.navbar}>
          <div className={styles.containerIcons}>
            <Search />
          </div>
          <div className={styles.containerIcons}>
            <div className={styles.containerFilter}>
              <div className={styles.rowFilter}>
                <form action=''>
                  <select name='universe' id='universe' onChange={handleFilter}>
                    <option value='all'>Todos los universos</option>
                    <option value='1'>universo 1</option>
                    <option value='2'>universo 2</option>
                    <option value='3'>universo 3</option>
                    <option value='4'>universo 4</option>
                    <option value='5'>universo 5</option>
                    <option value='6'>universo 6</option>
                    <option value='7'>universo 7</option>
                    <option value='8'>universo 8</option>
                    <option value='9'>universo 9</option>
                    <option value='10'>universo 10</option>
                    <option value='11'>universo 11</option>
                    <option value='12'>universo 12</option>
                  </select>
                </form>
                <div className={styles.iconFilter}>
                  <i className={'fa fa-filter'}></i>
                </div>
              </div>
            </div>
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

      <main className='animate__fadeInLeft'>
        <div className={styles.containerMain}>
          {filterCharacters.map((item) => (
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
      </main>
    </div>
  )
}
