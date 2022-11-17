import './header.css'

export const Header = () => {
  return (
    <header>
      <nav>
        <div className='navbar'>
          <div className='search'>
            <input className='inputSearch' type='text' />
            <p>Buscar por nombre</p>
          </div>

          <div className='filter'>
            <div className='filterSelect'>icon</div>
            <p>Filtrar por universo</p>
          </div>
        </div>
      </nav>
      <div className='container'>
        <img
          src='src/assets/logo.png'
          alt='imagen del logo oficial de dragon ball super'
        />
        <h1 className='title'>Prueba del Dragon</h1>
      </div>
    </header>
  )
}
