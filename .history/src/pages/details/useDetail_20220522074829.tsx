import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { Blog } from 'constants/models/blog.model'
import { getBlogDetailAction } from 'features/blog/blog.action'
import { useLoading } from 'hooks/useLoading'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function useDetail() {
  const { id } = useParams()
  const [detail, setDetail] = useState<Blog>({} as Blog)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loading = useLoading()
  const getDetail = () => {
    loading.show()
    dispatch(getBlogDetailAction(id as string))
      .then(unwrapResult)
      .then((res: any) => {
        setDetail(res.data)
      })
      .catch((err) => navigate('/notfound'))
  }
  useEffect(() => {
    getDetail()
  }, [id])

  return { detail }
}
