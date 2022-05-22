import React, { useState } from 'react'
import { Button, Modal, Nav } from 'react-bootstrap'

export default function Profile() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Nav.Link onClick={() => setShow(true)}>Profile</Nav.Link>
      <Modal
        className='search-modal'
        show={show}
        onHide={() => setShow(false)}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShow(false)}>
            Close
          </Button>
          <Button type='submit' variant='primary'>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
