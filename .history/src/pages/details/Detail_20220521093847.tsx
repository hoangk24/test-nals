import useDetail from 'pages/details/useDetail'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Detail() {
  const { detail } = useDetail()
  return (
    <Container>
      <div className='jumbotron'>
        <h1 className='display-4'>{detail.title}</h1>
        <p className='lead'>{detail.content}</p>
        <hr className='my-4' />
        <p>{detail.created_at}</p>
        <p className='lead'>
          <a className='btn btn-primary btn-lg' href='#' role='button'>
            Learn more
          </a>
        </p>
      </div>
    </Container>
  )
}
