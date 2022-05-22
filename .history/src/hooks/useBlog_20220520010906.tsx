import { useLoading } from 'hooks/useLoading'
import React from 'react'
import { getBlog } from 'services/blog.service'

export default function useBlog() {
  const loading = useLoading()
  const getBlogs = async () => {
    loading.show()
    try {
      const res = await getBlog({})
    } catch (error) {
      console.log(error)
    }
  }
  return { getBlogs }
}
