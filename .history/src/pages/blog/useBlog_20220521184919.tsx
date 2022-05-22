import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { ICreateBlogPayload, IGetBlogPayload } from 'constants/payloads/blog.payload'
import { createBlogAction } from 'features/blog/blog.action'
import { useLoading } from 'hooks/useLoading'
import React from 'react'
import { toast } from 'react-toastify'
import { getBlog } from 'services/blog.service'

export default function useBlog() {
  const dispatch = useAppDispatch()
  const loading = useLoading()
  const createBlog = (data: ICreateBlogPayload) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    loading.show()
    dispatch(createBlogAction(formData as any))
      .then(unwrapResult)
      .then((res: any) => {
        console.log(res)
      })
      .catch((err: any) => {
        toast.error(err?.message)
      })
      .finally(() => loading.hide())
  }
  const getBlogs = async (data: IGetBlogPayload) => {
    loading.show()
    try {
      const res: any = await getBlog(data)
      setBlogs(res.data.items)
      setpagination(res.pagination)
      const customPage = []
      for (let i = 0; i <= res.pagination.total - 1; i++) {
        customPage.push(i + 1)
      }
      setTotalPage(customPage)
    } catch (error) {
      console.log(error)
    }
    loading.hide()
  }
  return { createBlog }
}
