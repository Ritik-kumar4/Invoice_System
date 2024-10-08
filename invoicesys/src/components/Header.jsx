import React from 'react'
import {AppBar,Toolbar} from '@mui/material'
function Header() {
    const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png";
  return (
    <div>
      <AppBar position='static' color='secondary'>
        <Toolbar>
           <img src={logo} alt="logo" style={{width:120}}/> 
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
