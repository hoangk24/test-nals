import useBlog from 'hooks/useBlog'
import React, { useEffect } from 'react'

export default function Home() {
  const { getBlogs } = useBlog()
  useEffect(() => {
    getBlogs()
  }, [])

  return <div>Home</div>
}
