import { useAppSelector } from 'app/store'
import Input from 'components/input/Input'
import React, { useState } from 'react'
import { Button, Modal, Nav } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function Profile() {
  const [show, setShow] = useState(false)
  const { user } = useAppSelector().auth
  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      ...user,
    },
  })
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
        <Modal.Body>
          <Input control={control} />
        </Modal.Body>
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
