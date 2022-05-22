import { useLoading } from 'hooks/useLoading'
import React from 'react'

export default function useBlog() {
  const loading = useLoading()
  const getBlogs = async () => {
    loading.show()
    try {
      const res = await get
    } catch (error) {}
  }
  return <div>useBlog</div>
}
