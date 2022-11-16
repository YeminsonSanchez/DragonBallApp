import PropTypes from 'prop-types'
import {Header} from '../components/header/Header'
import './layoutApp.css'
export const LayoutApp = ({children}) => {
  return (
    <div id='layoutApp'>
      <Header />
      <main>{children}</main>
    </div>
  )
}

LayoutApp.prototype = {
  children: PropTypes.func.isRequired,
}
