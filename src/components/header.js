import React from 'react'
import Link from 'gatsby-link'
import linkedIn_icon from '../assets/linkedIn_icon.png'
import github_icon from '../assets/github_icon.png'
import { Name, Nav, NavLink, Logo } from './header-styles'

export default () => 
  <div style={{ overflow: 'auto'}}>
    <Name>
      <p>Russ Ward</p>
    </Name>
    <Nav>
      <NavLink href="https://github.com/RussWard" target="blank"><Logo src={github_icon} alt="GitHub"/></NavLink>
      <NavLink href="https://www.linkedin.com/in/russ-ward/" target="blank"><Logo src={linkedIn_icon} alt="LinkedIn"/></NavLink>
    </Nav>
  </div>