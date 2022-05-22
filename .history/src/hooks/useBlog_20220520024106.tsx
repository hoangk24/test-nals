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
  const [currenPage, setCurrenPage] = useState(1)
  const [offset, setOffset] = useState(20)
  const getBlogs = async (data?: IGetBlog) => {
    loading.show()
    try {
      const res = await getBlog(data || {})
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

  const changePage = (page: number) => setCurrenPage(page)
  const changeOffset = (offset: number) => {
    console.log('🚀 ~ file: useBlog.tsx ~ line 33 ~ changeOffset ~ offset', offset)
    setOffset(offset)
  }
  useEffect(() => {
    getBlogs({
      page: currenPage,
    })
  }, [currenPage])
  useEffect(() => {
    getBlogs({
      page: currenPage,
    })
  }, [offset])
  return { getBlogs, blogs, pagination, changePage, currenPage, changeOffset, offset }
}
