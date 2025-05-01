//import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <Link to='/' className='homeSite'>Home</Link>
      <ul>
        <CustomLink to='/page1'>Page1</CustomLink>
        <CustomLink to='/page2'>Page2</CustomLink>
        <CustomLink to='/page3'>Page3</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }: React.PropsWithChildren<{ to: string }>) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={ isActive ? "active" : "" }>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default NavBar