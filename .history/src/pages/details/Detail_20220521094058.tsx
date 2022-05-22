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
        <h1 className='display-4'>{detail.title}</h1>
        <p className='lead'>{detail.content}</p>
        <hr className='my-4' />
        <p>{detail.created_at}</p>
        <p className='lead'>
          <a>{moment(detail.updated_at).format('DD/MM/YYYY')}</a>
        </p>
      </div>
    </Container>
  )
}
