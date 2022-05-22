import { useAppSelector } from 'app/store'
import { Blog } from 'constants/models/blog.model'
import useAuth from 'pages/auth/useAuth'
import useBlog from 'pages/blog/useBlog'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './BlogCard.scss'
interface Props {
  blog: Blog
  onClick?: () => void
}

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
        {isLogin && onClick && <Button onClick={() => onClick()}>Edit</Button>}
        {isLogin && onClick && (
          <Button onClick={() => deleteBlog(blog.id as string)}>Delete</Button>
        )}
      </div>
    </Card>
  )
}
