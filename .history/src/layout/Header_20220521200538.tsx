import { useAppSelector } from 'app/store'
import useAuth from 'pages/auth/useAuth'
import CreateBlog from 'pages/blog/create/CreateBlog'
import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  const { isLogin } = useAppSelector().auth
  const { logout } = useAuth()
  const [createBlogModal, setCreateBlogModal] = useState(false)
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          {isLogin && (
            <Nav className='me-auto'>
              <Nav.Link>Profile</Nav.Link>
              <Nav.Link onClick={() => setCreateBlogModal(true)}>Create Blog</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
        <input />
        {isLogin ? (
          <NavDropdown title={'You'} id='basic-nav-dropdown'>
            <NavDropdown.Item onClick={() => logout()}>Đăng xuất</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <>
            <Link to='/login' className='btn btn-success block' style={{ marginRight: 10 }}>
              Đăng nhập
            </Link>
            <Link to='/register' className='btn btn-success block'>
              Đăng ký
            </Link>
          </>
        )}
      </Container>
      <CreateBlog hide={() => setCreateBlogModal(false)} visible={createBlogModal} />
    </Navbar>
  )
}
