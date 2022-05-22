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
      const customPage = []
      for (let i = 0; i <= res.data.pagination.page; i++) {
        customPage.push(i + 1)
      }
      console.log('🚀 ~ file: useBlog.tsx ~ line 17 ~ getBlogs ~ customPage', customPage)

      setpagination({ ...res?.data.pagination, page: customPage })
    } catch (error) {
      console.log(error)
    }
    loading.hide()
  }
  return { getBlogs, blogs, pagination }
}
