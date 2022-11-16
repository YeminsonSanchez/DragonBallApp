import './App.css'
import {LayoutApp} from './layouts/LayoutApp'
import {HomePage} from './pages/homePage/HomePage'

function App() {
  return (
    <LayoutApp>
      <main>
        <HomePage />
      </main>
    </LayoutApp>
  )
}

export default App
