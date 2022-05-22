import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import { createBlogAction, updateBlogAction } from 'features/blog/blog.action'
import { useLoading } from 'hooks/useLoading'
import { useHome } from 'pages/home/useHome'
import { toast } from 'react-toastify'

export default function useBlog() {
  const dispatch = useAppDispatch()
  const loading = useLoading()
  const { getBlogs } = useHome()
  const createBlog = (data: ICreateBlogPayload, fn: () => void) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    loading.show()
    return dispatch(createBlogAction(formData as any))
      .then(unwrapResult)
      .then((res: any) => {
        getBlogs()
        fn()
      })
      .catch((err: any) => {
        toast.error(err?.message)
      })
      .finally(() => loading.hide())
  }
  const updateBlog = (data: ICreateBlogPayload, fn: () => void) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    loading.show()
    return dispatch(updateBlogAction(formData as any))
      .then(unwrapResult)
      .then((res: any) => {
        getBlogs()
        fn()
      })
      .catch((err: any) => {
        toast.error(err?.message)
      })
      .finally(() => loading.hide())
  }
  return { createBlog, updateBlog }
}
