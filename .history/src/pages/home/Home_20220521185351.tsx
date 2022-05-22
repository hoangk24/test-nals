import { IDropdownOption } from 'constants/models/common.model'
import useHome from 'pages/home/useHome'
import React from 'react'
import { Container, Dropdown, DropdownButton, Pagination } from 'react-bootstrap'
import './Home.scss'
export default function Home() {
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
