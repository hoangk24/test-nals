import { Blog } from 'constants/models/blog.model'
import { useLoading } from 'hooks/useLoading'
import React, { useState } from 'react'
import { getBlog } from 'services/blog.service'

export default function useBlog() {
  const [blogs, setBlogs] = useState<Blog>([])
  const loading = useLoading()
  const getBlogs = async () => {
    loading.show()
    try {
      const res = await getBlog({})
    } catch (error) {
      console.log(error)
    }
    loading.hide()
  }
  return { getBlogs }
}
