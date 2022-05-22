import { Blog } from 'constants/models/blog.model'
import React from 'react'
import { Link } from 'react-router-dom'
import './List.scss'
interface Props {
  blog: Blog
  fn: () => void
}
export default function BlogCardListItem({ blog, fn }: Props) {
  return (
    <li key={blog.id} className='d-flex list-item'>
      <img
        src={blog.image.url}
        className='rounded'
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
      <div className='media-body'>
        <h5 className='mt-0 mb-1'>{blog.title}</h5>
        {blog.content.substring(0, 40)}...
      </div>
    </li>
  )
}
