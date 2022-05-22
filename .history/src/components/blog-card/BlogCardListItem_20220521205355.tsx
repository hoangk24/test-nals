import { Blog } from 'constants/models/blog.model'
import React from 'react'
interface Props {
  blog: Blog
}
export default function BlogCardListItem({ blog }: Props) {
  return (
    <div>
      <li key={it.id} className='d-flex'>
        <img
          src={it.image.url}
          className='rounded'
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <div className='media-body'>
          <h5 className='mt-0 mb-1'>{it.title}</h5>
          {it.content}
        </div>
      </li>
    </div>
  )
}
