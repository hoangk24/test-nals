/* eslint-disable camelcase */
import { Blog } from 'constants/models/blog.model'
import { IDropdownOption, IPagination, PropsWithChildren } from 'constants/models/common.model'
import { IGetBlogPayload } from 'constants/payloads/blog.payload'
import { useLoading } from 'hooks/useLoading'
import React, { createContext, useContext, useEffect, useState } from 'react'
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
interface IHomeContext {
  blogs: Blog[]
  pagination: IPagination
  totalPage: number[]
  currenPage: number
  offset: number
  sort: IDropdownOption
  sortDirection
  sortOption
  sortDirectionOption
  setSortDirection
  setSort
  changePage
  changeOffset
  getBlogs
}
const HomeContext = createContext<any>({})
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

  useEffect(() => {
    getBlogs({
      offset,
      page: currenPage,
      sort_by: sort.value as any,
      sort_direction: sortDirection.value as any,
    })
  }, [currenPage, offset, sort, sortDirection])

  return (
    <HomeContext.Provider
      value={{
        blogs,
        pagination,
        totalPage,
        currenPage,
        offset,
        sort,
        sortDirection,
        sortOption,
        sortDirectionOption,
        setSortDirection,
        setSort,
        changePage,
        changeOffset,
        getBlogs,
      }}
    >
      {children}
    </HomeContext.Provider>
  )
}
