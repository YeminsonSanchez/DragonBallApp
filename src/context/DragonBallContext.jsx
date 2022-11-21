import {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const DragonBallContext = createContext()

const DragonBallProvider = ({children}) => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://dragon-ball-super-api.herokuapp.com/api/characters',
      )

      setCharacters(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DragonBallContext.Provider value={{characters, setCharacters}}>
      {children}
    </DragonBallContext.Provider>
  )
}

export default DragonBallProvider
