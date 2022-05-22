import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Profile() {
  return (
    <>
      <Nav.Link>Profile</Nav.Link>
      <Modal
        className='search-modal'
        show={search}
        onHide={() => setSearch(false)}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className='input-group'>
              <input
                onChange={(e) => setText(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='basic-addon1'
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setSearch(false)}>
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
