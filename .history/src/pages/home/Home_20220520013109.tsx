import { Blog } from 'constants/models/blog.model'
import useBlog from 'hooks/useBlog'
import React, { useEffect, useMemo } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Home.scss'
export default function Home() {
  const { getBlogs, blogs } = useBlog()
  console.log(blogs)

  const mapList = useMemo(
    () =>
      blogs.length ? (
        <div>
          {blogs.map((it: Blog) => (
            <Card key={it.id} style={{ width: '18rem' }}>
              <Card.Img variant='top' src={it.image.url} />
              <Card.Body>
                <Card.Title>{it.title}</Card.Title>
                <Card.Text>{it.content.substring(0, 50)}...</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
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
{
  /* {blogs.map((it: Blog) => (
            <li key={it.id} className='media col-6'>
              <img src={it.image.url} className='mr-3 w-3' alt={it.image.url} />
              <div className='media-body'>
                <h5 className='mt-0 mb-1'>{it.title}</h5>
                {it.content}
              </div>
            </li>
          ))} */
}
