import {Card} from '../../components/card/Card'
import {Header} from '../../components/header/Header'
import './homePage.css'

export const HomePage = () => {
  return (
    <div className='mainContainer'>
      <Header />
      <main>
        <Card />
      </main>
    </div>
  )
}
