import { useAppSelector } from 'app/store'
import moment from 'moment'
import Comments from 'pages/details/comment/Comment'
import CommentWrapper from 'pages/details/useComment'
import useDetail from 'pages/details/useDetail'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Detail() {
  const { detail } = useDetail()
  const { isLogin } = useAppSelector().auth
  return (
    <CommentWrapper>
      <Container>
        <div className='jumbotron'>
          <img src={detail?.image?.url} />
          <h1 className='display-4'>{detail.title}</h1>
          <p className='lead'>{detail.content}</p>
          <hr className='my-4' />
          <div className='d-flex'>
            <p className='lead'>Ngày tạo: {moment(detail?.created_at).format('DD/MM/YYYY')}</p>
            <p className='lead'> - Cật nhật:{moment(detail?.updated_at).format('DD/MM/YYYY')}</p>
          </div>
          <p className='lead'>Số comment: {detail.comments_count}</p>
        </div>
        <Comments />
      </Container>
    </CommentWrapper>
  )
}
