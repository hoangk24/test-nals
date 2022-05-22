import { useAppSelector } from 'app/store'
import useAuth from 'pages/auth/useAuth'
import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  const { isLogin } = useAppSelector().auth
  const { logout } = useAuth()
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
            <NavDropdown.Item onClick={() => logout()}>Đăng xuất</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <>
            <Link to='/login' className='btn btn-'>
              Đăng nhập
            </Link>
            <Button>Đăng ký</Button>
          </>
        )}
      </Container>
    </Navbar>
  )
}
