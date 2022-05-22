import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { getBlogDetailAction } from 'features/blog/blog.action'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function useDetail() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const getDetail = () => {
    dispatch(getBlogDetailAction(id))
      .then(unwrapResult)
      .then((res: any) => {
        console.log(res)
      })
  }
  return {}
}
