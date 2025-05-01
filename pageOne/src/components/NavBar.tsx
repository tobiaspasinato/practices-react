import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <a href='/' className='homeSite'>Home</a>
      <ul>
        <li><a href='/page1'>Page1</a></li>
        <li><a href='/page2'>Page2</a></li>
      </ul>
    </nav>
  )
}

export default NavBar