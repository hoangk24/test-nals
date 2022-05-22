import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
interface Props {
  visible: boolean
  hide: () => void
}
export default function CreateBlog({ hide, visible }: Props) {
  const { control } = useForm()
  return (
    <Modal show={visible} onHide={hide} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create new blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
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
