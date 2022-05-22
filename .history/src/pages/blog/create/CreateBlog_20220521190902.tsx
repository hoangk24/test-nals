import Input from 'components/input/Input'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import { RULE } from 'constants/rules/rule'
import { useLoading } from 'hooks/useLoading'
import useSigleFileUpload from 'hooks/useSigleFileUpload'
import useBlog from 'pages/blog/useBlog'
import { useHome } from 'pages/home/useHome'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
interface Props {
  visible: boolean
  hide: () => void
}
export default function CreateBlog({ hide, visible }: Props) {
  const { control, handleSubmit } = useForm()
  const { file, handleChange, preview } = useSigleFileUpload()
  const { createBlog } = useBlog()
  const { getBlogs } = useHome()
  const loading = useLoading()
  const onSubmit = async (values: any) => {
    const { title, content } = values
    const data: ICreateBlogPayload = {
      'blog[content]': content,
      'blog[title]': title,
      'blog[image]': file,
    }
    loading.show()
    await createBlog(data)
      .then((res: any) => {
        await getBlogs()
      })
      .catch((err) => toast.error(err?.message))
      .finally(() => loading.hide())
  }

  return (
    <Modal show={visible} onHide={hide} backdrop='static' keyboard={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Create new blog</Modal.Title>
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
