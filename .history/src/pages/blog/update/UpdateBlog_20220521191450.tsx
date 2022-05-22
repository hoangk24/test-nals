import Input from 'components/input/Input'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import { RULE } from 'constants/rules/rule'
import useSigleFileUpload from 'hooks/useSigleFileUpload'
import useBlog from 'pages/blog/useBlog'
import { useHome } from 'pages/home/useHome'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
interface Props {
  visible: boolean
  hide: () => void
  data: ICreateBlogPayload
}
export default function UpdateBlog({ hide, visible, data }: Props) {
  const { control, handleSubmit } = useForm()
  const { file, handleChange, preview } = useSigleFileUpload()
  const { createBlog } = useBlog()
  const onSubmit = (values: any) => {
    const { title, content } = values
    const data: ICreateBlogPayload = {
      'blog[content]': content,
      'blog[title]': title,
      'blog[image]': file,
    }
    createBlog(data, hide)
  }

  return (
    <Modal show={visible} onHide={hide} backdrop='static' keyboard={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            control={control}
            rules={{
              validate: (value: string) => RULE.required(value, 'Tiêu đề'),
            }}
            name='title'
            label='Tiêu đề'
          />
          <Input
            rules={{
              validate: (value: string) => RULE.required(value, 'Nội dung'),
            }}
            control={control}
            name='content'
            label='Nội dung'
          />
          <div>
            <img src={preview} alt='' />
          </div>
          <input type='file' onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hide}>
            Close
          </Button>
          <Button type='submit' variant='primary'>
            Create
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
