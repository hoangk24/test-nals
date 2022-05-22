import Input from 'components/input/Input'
import { Blog } from 'constants/models/blog.model'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import { RULE } from 'constants/rules/rule'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import useSigleFileUpload from 'hooks/useSigleFileUpload'
import useBlog from 'pages/blog/useBlog'
import { useHome } from 'pages/home/useHome'
import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
interface Props {
  visible: boolean
  hide: () => void
  data: Blog
}
export default function UpdateBlog({ hide, visible, data }: Props) {
  const { control, handleSubmit, setValue } = useForm()
  const { file, handleChange, preview, resetFile } = useSigleFileUpload()
  const { updateBlog } = useBlog()
  const onSubmit = (values: any) => {
    const { title, content } = values
    const update: ICreateBlogPayload = file
      ? {
          'blog[content]': content,
          'blog[title]': title,
          'blog[image]': file,
        }
      : {
          'blog[content]': content,
          'blog[title]': title,
        }
    updateBlog(data.id as any, update, hide)
  }
  useEffect(() => {
    setValue('title', data.title)
    setValue('content', data.content)
  }, [data])

  useEffectSkipFirstRender(() => {
    return () => {
      resetFile()
    }
  }, [visible])

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
          <div>{preview && <img src={preview} alt='' />}</div>
          <input type='file' onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hide}>
            Close
          </Button>
          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}
