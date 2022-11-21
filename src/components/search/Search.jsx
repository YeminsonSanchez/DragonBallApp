import {useContext, useState} from 'react'
import styles from './search.module.css'
import {useNavigate} from 'react-router-dom'
import {DragonBallContext} from '../../context/DragonBallContext'
import Swal from 'sweetalert2'

export const Search = () => {
  const {characters} = useContext(DragonBallContext)
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const charactersFilter = characters.filter(
      (item) => item.name.toLowerCase() === inputValue.toLowerCase(),
    )

    if (charactersFilter.length === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Personaje no encontrado',
        icon: 'error',
        confirmButtonText: 'volver',
      })
      setInputValue('')
    } else {
      inputValue.trim()
      const name = inputValue[0].toUpperCase() + inputValue.substring(1)
      navigate(`/characters/${name}`)
    }
  }

  return (
    <div className={styles.containerSearch}>
      <div className={styles.rowSearch}>
        <form onSubmit={onSubmit} aria-label='form'>
          <input
            type='text'
            placeholder='Buscar por nombre'
            value={inputValue}
            onChange={onInputChange}
          />
        </form>
        <div className={styles.iconSearch}>
          <i className={'fa fa-search'}></i>
          <i className={'fa-solid fa-xmark'}></i>
        </div>
      </div>
    </div>
  )
}
