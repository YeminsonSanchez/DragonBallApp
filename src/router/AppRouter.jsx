import {Route, Routes} from 'react-router-dom'
import {CharacterPage} from '../pages/characterPage/CharacterPage'
import {HomePage} from '../pages/homePage/HomePage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
        path='/*'
        element={<HomePage />} 
        />

        <Route 
        path='characters/*' 
        element={<CharacterPage />}
        />
      </Routes>
    </>
  )
}
