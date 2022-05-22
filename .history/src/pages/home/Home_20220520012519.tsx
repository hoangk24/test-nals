import { Blog } from 'constants/models/blog.model'
import useBlog from 'hooks/useBlog'
import React, { useEffect, useMemo } from 'react'
import './Home.scss'
export default function Home() {
  const { getBlogs, blogs } = useBlog()
  console.log(blogs)

  const mapList = useMemo(
    () =>
      blogs.length ? (
        <ul className='list-unstyled'>
          {blogs.map((it: Blog) => (
            <>
              <li key={it.id} className='media'>
                <img src={it.image.url} className='mr-3 w-3' alt={it.image.url} />
                <div className='media-body'>
                  <h5 className='mt-0 mb-1'>{it.title}</h5>
                  {it.content}
                </div>
              </li>
            </>
          ))}
        </ul>
      ) : null,
    [blogs],
  )
  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div>
      {/*  */}
      {mapList}
    </div>
  )
}
