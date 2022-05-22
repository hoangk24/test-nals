import { useAppSelector } from 'app/store'
import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Header() {
  const { isLogin } = useAppSelector().auth

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {isLogin ? (
          <NavDropdown title={'You'} id='basic-nav-dropdown'>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href='#action/3.4'>Đăng xuất</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <>
            <Button>Đăng nhập</Button>
            <Button>Đăng ký</Button>
          </>
        )}
      </Container>
    </Navbar>
  )
}
