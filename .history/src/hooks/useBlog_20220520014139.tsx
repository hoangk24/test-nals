import { Blog } from 'constants/models/blog.model'
import { useLoading } from 'hooks/useLoading'
import React, { useState } from 'react'
import { getBlog } from 'services/blog.service'

export default function useBlog() {
  const [blogs, setBlogs] = useState<Blog[] | []>([])
  const [pagination, setpagination] = useState({})
  const loading = useLoading()
  const getBlogs = async () => {
    loading.show()
    try {
      const res = await getBlog({})
      console.log(res)

      setBlogs(res?.data.data.items)
      setBlogs(res?.data.pagination)
    } catch (error) {
      console.log(error)
    }
    loading.hide()
  }
  return { getBlogs, blogs }
}
