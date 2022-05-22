import React from 'react'
import { Button, Modal } from 'react-bootstrap'
interface Props {
  visible: boolean
  hide: () => void
}
export default function CreateBlog({ hide, visible }: Props) {
  return (
    <Modal show={visible} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={hide}>
          Close
        </Button>
        <Button variant='primary'>Understood</Button>
      </Modal.Footer>
    </Modal>
  )
}
