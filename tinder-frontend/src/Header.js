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
    </div>
  )
}

export default Header
