import BlogCard from 'components/blog-card/BlogCard'
import { Blog } from 'constants/models/blog.model'
import { IDropdownOption } from 'constants/models/common.model'
import useHome from 'pages/home/useBlog'
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
    sortOption,
    sort,
    setSort,
    sortDirection,
    sortDirectionOption,
    setSortDirection,
    mapList,
    mapPagination,
  } = useHome()

  return (
    <div className='home'>
      <Container>
        <div className='d-flex'>
          <DropdownButton title={sortOption.filter((it: IDropdownOption) => it === sort)[0]?.label}>
            {sortOption.map((it: IDropdownOption) => (
              <Dropdown.Item active={it === sort} onClick={() => setSort(it)} key={Math.random()}>
                {it.label}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <DropdownButton
            style={{ marginLeft: 10 }}
            title={
              sortDirectionOption.filter((it: IDropdownOption) => it === sortDirection)[0]?.label
            }
          >
            {sortDirectionOption.map((it: IDropdownOption) => (
              <Dropdown.Item
                active={it === sortDirection}
                onClick={() => setSortDirection(it)}
                key={Math.random()}
              >
                {it.label}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>

        <div className='top'>{mapList}</div>
        <div className='bot'> {mapPagination}</div>
      </Container>
    </div>
  )
}
