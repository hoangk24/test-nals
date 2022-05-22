import React from 'react'
import { Modal, Button } from 'react-bootstrap'
interface Props {
  visible: boolean
  hide: () => void
}
export default function Search({ hide, visible }: Props) {
  return (
    <Modal show={visible} onHide={hide} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text' id='basic-addon1'>
                @
              </span>
            </div>
            <input
              type='text'
              className='form-control'
              placeholder='Username'
              aria-label='Username'
              aria-describedby='basic-addon1'
            />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={hide}>
          Close
        </Button>
        <Button type='submit' variant='primary'>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
