import { Blog } from 'constants/models/blog.model'
import { IPagination } from 'constants/models/common.model'
import { IGetBlog } from 'constants/payloads/blog.payload'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import { useLoading } from 'hooks/useLoading'
import React, { useEffect, useState } from 'react'
import { getBlog } from 'services/blog.service'

export default function useBlog() {
  const [blogs, setBlogs] = useState<Blog[] | []>([])
  const [pagination, setpagination] = useState<IPagination>({} as IPagination)

  const loading = useLoading()

  const getBlogs = async (data?: IGetBlog) => {
    loading.show()
    try {
      const res = await getBlog({ data })
      setBlogs(res?.data.data.items)
      const customPage = []
      for (let i = 0; i <= res.data.pagination.total; i++) {
        customPage.push(i + 1)
      }
      setpagination({ ...res?.data.pagination, total: customPage })
    } catch (error) {
      console.log(error)
    }
    loading.hide()
  }
  useEffectSkipFirstRender(() => {
    getBlogs()
  }, [pagination.page])

  return { getBlogs, blogs, pagination }
}
