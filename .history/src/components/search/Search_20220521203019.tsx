import React from 'react'
import { Modal, Button } from 'react-bootstrap'
interface Props {
  visible: boolean
  hide: () => void
}
export default function Search({ hide, visible }: Props) {
  return (
    <>
      <div className='input-group w-25'>
        <input
          onClick={() => setSearch(true)}
          type='text'
          className='form-control'
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
        />
        <div className='input-group-append'>
          <span className='input-group-text' id='basic-addon2'>
            Search
          </span>
        </div>
      </div>
      <Modal show={visible} onHide={hide} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search'
                aria-label='Search'
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
    </>
  )
}
