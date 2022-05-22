import moment from 'moment'
import Comment from 'pages/details/comment/Comment'
import CommentWrapper from 'pages/details/useComment'
import useDetail from 'pages/details/useDetail'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Detail() {
  const { detail } = useDetail()
  console.log('🚀 ~ file: Detail.tsx ~ line 7 ~ Detail ~ detail', detail)

  return <CommentWrapper></CommentWrapper>
}
