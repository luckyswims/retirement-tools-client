import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => (
  <Navbar>
    <Navbar.Brand href="/">
      Retirement Tools
    </Navbar.Brand>
    <Nav.Link href="">Annuities</Nav.Link>
  </Navbar>
)

export default Header
