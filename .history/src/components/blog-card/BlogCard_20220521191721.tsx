import { Blog } from 'constants/models/blog.model'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './BlogCard.scss'
interface Props {
  blog: Blog
}

export default function BlogCard({ blog }: Props) {
  const navigate = useNavigate()
  return (
    <Card className='blog-card' onClick={() => navigate(`/blog/${blog.id}`)}>
      <div className='card-img-top'>
        <img src={blog.image.url} alt='' />
      </div>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.content.substring(0, 50)}...</Card.Text>
      </Card.Body>
      <Button>Edit</Button>
    </Card>
  )
}
