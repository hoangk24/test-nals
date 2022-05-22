import { Blog } from 'constants/models/blog.model'
import useBlog from 'hooks/useBlog'
import React, { useEffect, useMemo } from 'react'

export default function Home() {
  const { getBlogs, blogs } = useBlog()
  useEffect(() => {
    getBlogs()
  }, [])
  const mapList = useMemo(() => {
    return blogs.map((it: Blog) => (
      <>
        <li key={it.id} className='media'>
          <img src={it.image.url} className='mr-3' alt={it.image.url} />
          <div className='media-body'>
            <h5 className='mt-0 mb-1'>{it.title}</h5>
            {it.content}
          </div>
        </li>
      </>
    ))
  }, [blogs])

  return (
    <div>
      <ul className='list-unstyled'></ul>
    </div>
  )
}
