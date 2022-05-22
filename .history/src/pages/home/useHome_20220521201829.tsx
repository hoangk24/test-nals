/* eslint-disable camelcase */
import { Blog } from 'constants/models/blog.model'
import { IDropdownOption, IPagination, PropsWithChildren } from 'constants/models/common.model'
import { IGetBlogPayload } from 'constants/payloads/blog.payload'
import { useLoading } from 'hooks/useLoading'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getBlog } from 'services/blog.service'
import _debounce from 'lodash/debounce'
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
  sortDirection: IDropdownOption
  sortOption: IDropdownOption[]
  sortDirectionOption: IDropdownOption[]
  setSortDirection: React.Dispatch<React.SetStateAction<IDropdownOption>>
  setSort: React.Dispatch<React.SetStateAction<IDropdownOption>>
  changePage: (page: number) => void
  changeOffset: (offset: number) => void
  getBlogs: any
}
const HomeContext = createContext<IHomeContext>({} as IHomeContext)
export const useHome = () => useContext(HomeContext)
export default function HomeProvider({ children }: PropsWithChildren) {
  const [blogs, setBlogs] = useState<Blog[] | []>([])
  const [pagination, setpagination] = useState<IPagination>({} as IPagination)
  const [currenPage, setCurrenPage] = useState(1)
  const [totalPage, setTotalPage] = useState<number[]>([])
  const [offset, setOffset] = useState(20)
  const [sort, setSort] = useState(sortOption[4])
  const [sortDirection, setSortDirection] = useState(sortDirectionOption[1])
  const [text, setText] = useState('')
  const search = () => {
    //  dispatch(searchProductDetailAction({ search: text }))
    //    .then(unwrapResult)
    //    .then((res: any) => {
    //      setProduct(res.data)
    //    })
  }
  const onSearch = useCallback(
    _debounce(() => search(), 300),
    [text],
  )
  const loading = useLoading()
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

  //  useEffectSkipFisrtRender(() => {
  //    onSearch()
  //    return onSearch.cancel
  //  }, [text, onSearch])

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
