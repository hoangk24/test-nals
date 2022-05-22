/* eslint-disable camelcase */
import BlogCard from 'components/blog-card/BlogCard'
import { Blog } from 'constants/models/blog.model'
import { IDropdownOption, IPagination, PropsWithChildren } from 'constants/models/common.model'
import { IGetBlogPayload } from 'constants/payloads/blog.payload'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import { useLoading } from 'hooks/useLoading'
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Row, Col, Pagination, DropdownButton, Dropdown } from 'react-bootstrap'
import { getBlog } from 'services/blog.service'

const sortOption: IDropdownOption[] = [
  {
    label: 'Mã ID',
    value: 'id',
  },
  {
    label: 'Tiêu đề',
    value: 'title',
  },
  {
    label: 'Nội dung',
    value: 'content',
  },
  {
    label: 'Ngày tạo',
    value: 'created_at',
  },
  {
    label: 'Ngày cật nhật',
    value: 'updated_at',
  },
]
const sortDirectionOption: IDropdownOption[] = [
  {
    label: 'Tăng dần',
    value: 'asc',
  },
  {
    label: 'Giảm dần',
    value: 'desc',
  },
]
interface IHomeProvider {

    getBlogs:any,
    blogs,
    pagination,
    changePage,
    currenPage,
    changeOffset,
    offset,
    totalPage,
    sortOption,
    sort,
    setSort,
    sortDirection,
    setSortDirection,
    sortDirectionOption,
    mapPagination,
    mapList,

}
const HomeContext = createContext({})
export const useHome = () => useContext(HomeContext)
export default function HomeProvider({ children }: PropsWithChildren) {
  const [blogs, setBlogs] = useState<Blog[] | []>([])
  const [pagination, setpagination] = useState<IPagination>({} as IPagination)
  const loading = useLoading()
  const [currenPage, setCurrenPage] = useState(1)
  const [totalPage, setTotalPage] = useState<number[]>([])
  const [offset, setOffset] = useState(20)
  const [sort, setSort] = useState(sortOption[4])
  const [sortDirection, setSortDirection] = useState(sortDirectionOption[1])
  const getBlogs = async (data: IGetBlogPayload) => {
    loading.show()
    try {
      const res: any = await getBlog(data)
      setBlogs(res.data.items)
      setpagination(res.pagination)
      const customPage = []
      for (let i = 0; i <= res.pagination.total - 1; i++) {
        customPage.push(i + 1)
      }
      setTotalPage(customPage)
    } catch (error) {
      console.log(error)
    }
    loading.hide()
  }
  const changePage = (page: number) => setCurrenPage(page)
  const changeOffset = (offset: number) => {
    setCurrenPage(1)
    setOffset(offset)
  }

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
  useEffect(() => {
    getBlogs({
      offset,
      page: currenPage,
      sort_by: sort.value as any,
      sort_direction: sortDirection.value as any,
    })
  }, [currenPage, offset, sort, sortDirection])

  return <HomeContext.Provider value={{
    {
    getBlogs,
    blogs,
    pagination,
    changePage,
    currenPage,
    changeOffset,
    offset,
    totalPage,
    sortOption,
    sort,
    setSort,
    sortDirection,
    setSortDirection,
    sortDirectionOption,
    mapPagination,
    mapList,
  }
  }}>{children}</HomeContext.Provider>
}
