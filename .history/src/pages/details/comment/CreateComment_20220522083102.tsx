import Input from 'components/input/Input'
import TextArea from 'components/input/TextArea'
import { RULE } from 'constants/rules/rule'
import { useComment } from 'pages/details/useComment'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function CreateComment() {
  const [show, setShow] = useState(false)
  const { control, handleSubmit } = useForm()
  const { createComment } = useComment()
  const onSubmit = (value: any) => {}
  return (
    <div>
      <Button onClick={() => setShow(true)}>Create Comment</Button>
      <Modal show={show} onHide={() => setShow(false)} backdrop='static' keyboard={false}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextArea
              control={control}
              name='content'
              label='Content'
              rules={{
                validate: (value: string) => RULE.required(value, 'Nội dung!'),
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShow(false)}>
              Close
            </Button>
            <Button type='submit' variant='primary'>
              Create
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}
