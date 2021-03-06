import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
  return (
    //BEM class css naming conventions
    <div className='header'>
      <IconButton>
        <PersonIcon className='header_icon' fontSize='large' />
      </IconButton>
      <img
        className='header_logo'
        src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg'
        alt='tinde logo'
      />
      <IconButton>
        <ForumIcon className='header_icon' fontSize='large' />
      </IconButton>
    </div>
  )
}

export default Header
