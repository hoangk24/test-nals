import useBlog from 'hooks/useBlog'
import React, { useEffect } from 'react'

export default function Home() {
  const { getBlogs, blogs } = useBlog()
  useEffect(() => {
    getBlogs()
  }, [])
  const mapList = useMemo(() => {}, [blogs])

  return (
    <div>
      <ul className='list-unstyled'>
        <li className='media'>
          <img src='...' className='mr-3' alt='...' />
          <div className='media-body'>
            <h5 className='mt-0 mb-1'>List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
            condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
      </ul>
    </div>
  )
}