import { Blog } from 'constants/models/blog.model'
import { IDropdownOption, IPagination } from 'constants/models/common.model'
import { IGetBlog } from 'constants/payloads/blog.payload'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import { useLoading } from 'hooks/useLoading'
import React, { useEffect, useState } from 'react'
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
const sortDirection: IDropdownOption[] = [
  {
    label: 'Tăng dần',
    value: 'asc',
  },
]
export default function useBlog() {
  const [blogs, setBlogs] = useState<Blog[] | []>([])
  const [pagination, setpagination] = useState<IPagination>({} as IPagination)
  const loading = useLoading()
  const [currenPage, setCurrenPage] = useState(1)
  const [totalPage, setTotalPage] = useState<number[]>([])
  const [offset, setOffset] = useState(20)
  const [sort, setSort] = useState(sortOption[4])
  const [sorDirection, setSorDirection] = useState('asc')
  const getBlogs = async (data: IGetBlog) => {
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
      // eslint-disable-next-line camelcase
      sort_by: sort.value as any,
    })
  }, [currenPage, offset, sort])

  return {
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
  }
}
