import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'

function Header() {
  return (
    <div className='header'>
      <h2>Header</h2>
      <IconButton>
        <PersonIcon className='header_icon' fontSize='large' />
      </IconButton>
      <img
        className='header_logo'
        src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg'
        alt=''
      />
    </div>
  )
}

export default Header
