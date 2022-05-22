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
        <Modal.Title>Search</Modal.Title>
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
