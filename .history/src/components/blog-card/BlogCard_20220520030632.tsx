import { Blog } from 'constants/models/blog.model'
import React from 'react'
import { Card } from 'react-bootstrap'
import './BlogCard.scss'
interface Props {
  blog: Blog
}

export default function BlogCard({ blog }: Props) {
  return (
    <Card className='blog-card'>
      <div className='card-img-top'>
        <img src={blog.image.url} alt='' />
      </div>
      <Card.Img variant='top' src={blog.image.url} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.content.substring(0, 50)}...</Card.Text>
      </Card.Body>
    </Card>
  )
}
