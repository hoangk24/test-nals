import { Blog } from 'constants/models/blog.model'
import React from 'react'
import { Card } from 'react-bootstrap'
interface Props {
  blog: Blog
}
export default function BlogCard({ blog }: Props) {
  return (
    <Card className='blog-card'>
      <Card.Img variant='top' src={blog.image.url} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.content.substring(0, 50)}...</Card.Text>
      </Card.Body>
    </Card>
  )
}
