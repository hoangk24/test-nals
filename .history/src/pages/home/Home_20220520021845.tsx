import { Blog } from 'constants/models/blog.model'
import useBlog from 'hooks/useBlog'
import React, { useEffect, useMemo } from 'react'
import { Button, Card, Col, Container, Pagination, Row } from 'react-bootstrap'
import './Home.scss'
export default function Home() {
  const { blogs, pagination, changePage } = useBlog()

  const mapList = useMemo(
    () =>
      blogs.length ? (
        <Row>
          {blogs.map((it: Blog) => (
            <Col lg={3} key={it.id}>
              <Card className='blog-card'>
                <Card.Img variant='top' src={it.image.url} />
                <Card.Body>
                  <Card.Title>{it.title}</Card.Title>
                  <Card.Text>{it.content.substring(0, 50)}...</Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : null,
    [blogs],
  )

  return (
    <div className='home'>
      <Container>{mapList}</Container>
      <Pagination>
        <Pagination.Prev onClick={() => changePage(pagination?.page--)} />
        {(pagination?.total as any)?.map((it: number) => (
          <Pagination.Item
            onClick={() => changePage(it)}
            active={pagination.page === it}
            key={Math.random()}
          >
            {it}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => changePage(pagination?.page++)} />
      </Pagination>
    </div>
  )
}
