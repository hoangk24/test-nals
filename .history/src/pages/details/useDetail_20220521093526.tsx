import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { Blog } from 'constants/models/blog.model'
import { getBlogDetailAction } from 'features/blog/blog.action'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function useDetail() {
  const { id } = useParams()
  const [detail, setDetail] = useState<Blog>({} as Blog)
  const dispatch = useAppDispatch()
  const getDetail = () => {
    dispatch(getBlogDetailAction(id as string))
      .then(unwrapResult)
      .then((res: any) => {
        console.log(res)
      })
  }
  useEffect(() => {
    getDetail()
  }, [id])

  return { id }
}
