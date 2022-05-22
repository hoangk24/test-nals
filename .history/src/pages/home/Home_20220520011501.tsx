import useBlog from 'hooks/useBlog'
import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Home() {
  const { getBlogs } = useBlog()
  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>sss</ListGroup.Item>
      </ListGroup>
      {/* <ul className='list-unstyled'>
        <li className='media'>
          <img src='...' className='mr-3' alt='...' />
          <div className='media-body'>
            <h5 className='mt-0 mb-1'>List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
            condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
      </ul> */}
    </div>
  )
}
