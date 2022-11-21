import {Route, Routes} from 'react-router-dom'
import {CharacterPage} from '../pages/characterPage/CharacterPage'
import {HomePage} from '../pages/homePage/HomePage'
import {UniversePage} from '../pages/universePage/UniversePage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='home/' element={<HomePage />} />

        <Route path='characters/:characterName' element={<CharacterPage />} />
        <Route path='universes/:universeNumber' element={<UniversePage />} />
        {/* route for 404 page */}
        <Route path='*' element={<HomePage />} />
      </Routes>
    </>
  )
}
