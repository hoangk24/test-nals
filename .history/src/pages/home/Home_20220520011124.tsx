import React from 'react'

export default function Home() {
  const { getBlogs } = useBlog()
  useEffect(() => {
    getBlogs()
  }, [])

  return <div>Home</div>
}
