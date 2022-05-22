import { useAppSelector } from 'app/store'
import { Blog } from 'constants/models/blog.model'
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
  function myFunction() {
    let text = 'Press a button!\nEither OK or Cancel.'
    if (confirm(text) == true) {
      text = 'You pressed OK!'
    } else {
      text = 'You canceled!'
    }
    document.getElementById('demo').innerHTML = text
  }
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
        {isLogin && <Button onClick={() => deleteBlog(blog.id as any)}>Delete</Button>}
      </div>
    </Card>
  )
}
