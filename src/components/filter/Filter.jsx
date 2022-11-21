import styles from './filter.module.css'
import {useNavigate} from 'react-router-dom'

export const Filter = () => {
  const navigate = useNavigate()

  const handleFilter = (e) => {
    const universe = e.target.value

    navigate(`/universes/${universe}`)
  }

  return (
    <div className={styles.containerFilter}>
      <div className={styles.rowFilter}>
        <form action=''>
          <select name='universe' id='universe' onChange={handleFilter}>
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
  )
}
