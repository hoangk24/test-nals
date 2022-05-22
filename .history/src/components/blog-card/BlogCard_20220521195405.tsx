import { useAppSelector } from 'app/store'
import { Blog } from 'constants/models/blog.model'
import useBlog from 'pages/blog/useBlog'
import React from 'react'
import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './BlogCard.scss'
interface Props {
  blog: Blog
  onClick?: () => void
}
const popover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Delete warring!</Popover.Header>
    <Popover.Body>Are you sure?</Popover.Body>
    <
  </Popover>
)
export default function BlogCard({ blog, onClick }: Props) {
  const { isLogin } = useAppSelector().auth
  const navigate = useNavigate()
  const { deleteBlog } = useBlog()
  return (
    <Card className='blog-card'>
      <div className='card-img-top' onClick={() => navigate(`/blog/${blog.id}`)}>
        <img src={blog.image.url} alt='' />
      </div>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.content.substring(0, 50)}...</Card.Text>
      </Card.Body>
      <div className='p-2'>
        {isLogin && onClick && (
          <Button style={{ marginRight: 10 }} onClick={() => onClick()}>
            Edit
          </Button>
        )}
        {isLogin && (
          <OverlayTrigger trigger='click' placement='right' overlay={popover}>
            <Button
              variant='secondary'
              className='btn-error'
              onClick={() => deleteBlog(blog.id as any)}
            >
              Delete
            </Button>
          </OverlayTrigger>
        )}
      </div>
    </Card>
  )
}
