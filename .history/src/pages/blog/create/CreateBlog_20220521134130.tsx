import Input from 'components/input/Input'
import useSigleFileUpload from 'hooks/useSigleFileUpload'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
interface Props {
  visible: boolean
  hide: () => void
}
export default function CreateBlog({ hide, visible }: Props) {
  const { control } = useForm()
  const { file, handleChange, preview } = useSigleFileUpload()
  return (
    <Modal show={visible} onHide={hide} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create new blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action=''>
          <input />
          <Input control={control} name='title' label='Tiêu đề' />
          <Input control={control} name='title' label='Tiêu đề' />
          <Input control={control} name='title' label='Tiêu đề' />
        </form>
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
