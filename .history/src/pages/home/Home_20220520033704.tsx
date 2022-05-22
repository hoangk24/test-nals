import BlogCard from 'components/blog-card/BlogCard'
import { Blog } from 'constants/models/blog.model'
import { IDropdownOption } from 'constants/models/common.model'
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
  const {
    blogs,
    pagination,
    changePage,
    currenPage,
    changeOffset,
    totalPage,
    sortOption,
    sort,
    setSort,
    sortDirection,
    sortDirectionOption,
    setSortDirection,
  } = useBlog()

  const mapList = useMemo(
    () =>
      blogs.length ? (
        <Row>
          {blogs.map((it: Blog) => (
            <Col lg={3} key={it.id} className='p-2'>
              <BlogCard blog={it} />
            </Col>
          ))}
        </Row>
      ) : null,
    [blogs],
  )

  const mapPagination = useMemo(() => {
    return pagination ? (
      <Pagination>
        <Pagination.Prev
          disabled={currenPage === 1}
          onClick={() => changePage(--pagination.page)}
        />
        {totalPage?.map((it: number) => (
          <Pagination.Item
            onClick={() => changePage(it)}
            active={currenPage === it}
            key={Math.random()}
          >
            {it}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={currenPage === pagination.total}
          onClick={() => changePage(++pagination.page)}
        />
        <DropdownButton id='dropdown-basic-button' title={`${pagination.offset}`}>
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
        <DropdownButton title={sortOption.filter((it: IDropdownOption) => it === sort)[0]?.label}>
          {sortOption.map((it: IDropdownOption) => (
            <Dropdown.Item onClick={() => setSort(it)} key={Math.random()}>
              {it.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <DropdownButton title={sortOption.filter((it: IDropdownOption) => it === sort)[0]?.label}>
          {sortOption.map((it: IDropdownOption) => (
            <Dropdown.Item onClick={() => setSort(it)} key={Math.random()}>
              {it.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <div className='top'>{mapList}</div>
        <div className='bot'> {mapPagination}</div>
      </Container>
    </div>
  )
}
