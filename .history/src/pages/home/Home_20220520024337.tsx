import { Blog } from 'constants/models/blog.model'
import useBlog from 'hooks/useBlog'
import React, { useEffect, useMemo } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Pagination,
  Row,
} from 'react-bootstrap'
import './Home.scss'
export default function Home() {
  const { blogs, pagination, changePage, currenPage, changeOffset, offset } = useBlog()
  console.log(pagination)

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

  const mapPagination = useMemo(() => {
    return pagination ? (
      <Pagination>
        <Pagination.Prev onClick={() => changePage(++pagination.page)} />
        {(pagination?.total as any)?.map((it: number) => (
          <Pagination.Item
            onClick={() => changePage(it)}
            active={currenPage === it}
            key={Math.random()}
          >
            {it}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => changePage(++pagination.page)} />
        <DropdownButton id='dropdown-basic-button' title={pagination.offset}>
          {[20, 30, 40].map((it: number) => (
            <Dropdown.Item
              onClick={() => changeOffset(it)}
              key={it}
              active={pagination.offset === it}
            >
              {it}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Pagination>
    ) : null
  }, [pagination])
  return (
    <div className='home'>
      <Container>
        {mapList} {mapPagination}
      </Container>
    </div>
  )
}
