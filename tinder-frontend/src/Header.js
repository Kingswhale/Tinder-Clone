import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
function Header() {
  return (
    <div className='header'>
      <h2>I am the Header</h2>
      <PersonIcon className='header_icon' fontSize='large' />
    </div>
  )
}

export default Header
