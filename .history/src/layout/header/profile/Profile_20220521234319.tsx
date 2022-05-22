import { useAppSelector } from 'app/store'
import Input from 'components/input/Input'
import React, { useState } from 'react'
import { Button, Modal, Nav } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function Profile() {
  const [show, setShow] = useState(false)
  const { user } = useAppSelector().auth
  const { control, setValue, handleSubmit } = useForm()
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
          <Input name='name' label='Tên' control={control} />
          <Input name='email' label='Email' control={control} />
          <Input name='password' label='Mật khẩu' control={control} />
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
