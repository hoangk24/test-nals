import { Blog } from 'constants/models/blog.model'
import { IPagination } from 'constants/models/common.model'
import { useLoading } from 'hooks/useLoading'
import React, { useState } from 'react'
import { getBlog } from 'services/blog.service'

export default function useBlog() {
  const [blogs, setBlogs] = useState<Blog[] | []>([])
  const [pagination, setpagination] = useState<IPagination>({} as IPagination)
  const loading = useLoading()
  const getBlogs = async () => {
    loading.show()
    try {
      const res = await getBlog({})
      setBlogs(res?.data.data.items)
      // eslint-disable-next-line camelcase
      const custom_page = []
      for (let i = 1; i++; i < res.data.pagination.page) {
        custom_page.push(i)
      }
      setpagination(res?.data.pagination)
    } catch (error) {
      console.log(error)
    }
    loading.hide()
  }
  return { getBlogs, blogs, pagination }
}
