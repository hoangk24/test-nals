import { useAppSelector } from 'app/store'
import Input from 'components/input/Input'
import { RULE } from 'constants/rules/rule'
import useSigleFileUpload from 'hooks/useSigleFileUpload'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Nav } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function Profile() {
  const [show, setShow] = useState(false)
  const { user } = useAppSelector().auth
  const { control, setValue, handleSubmit } = useForm()
  const { file, handleChange, preview, setPreview } = useSigleFileUpload()
  useEffect(() => {
    if (user) {
      for (const [key, value] of Object.entries(user)) {
        setValue(key, value)
      }
      setPreview(user.avatar.url as any)
    }
  }, [user])

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
          <div className='d-flex justify-content-center'>
            <img
              src={preview}
              alt=''
              className='rounded-circle'
              style={{ width: 100, height: 100 }}
            />
          </div>
          <input type='file' onChange={handleChange} />
          <Input
            name='name'
            label='Tên'
            control={control}
            rules={{ validate: (values: string) => RULE.within50Characters(values, 'Tên') }}
          />
          <Input
            name='email'
            label='Email'
            control={control}
            rules={{ validate: (values: string) => RULE.WrongEmailFormat(values, 'Email') }}
          />
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
