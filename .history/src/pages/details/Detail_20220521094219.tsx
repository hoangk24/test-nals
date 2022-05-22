import moment from 'moment'
import useDetail from 'pages/details/useDetail'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Detail() {
  const { detail } = useDetail()
  console.log('🚀 ~ file: Detail.tsx ~ line 7 ~ Detail ~ detail', detail)

  return (
    <Container>
      <div className='jumbotron'>
        <img src={detail.image.url} alt='' />
        <h1 className='display-4'>{detail.title}</h1>
        <p className='lead'>{detail.content}</p>
        <hr className='my-4' />
        <div className='d-flex'>
          <p className='lead'>Ngày tạo: {moment(detail.created_at).format('DD/MM/YYYY')}</p>
          <p className='lead'> - Cật nhật:{moment(detail.updated_at).format('DD/MM/YYYY')}</p>
        </div>
      </div>
    </Container>
  )
}
