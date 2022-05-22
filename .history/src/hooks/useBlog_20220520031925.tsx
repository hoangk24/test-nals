import { Blog } from 'constants/models/blog.model'
import { IPagination } from 'constants/models/common.model'
import { IGetBlog } from 'constants/payloads/blog.payload'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import { useLoading } from 'hooks/useLoading'
import React, { useEffect, useState } from 'react'
import { getBlog } from 'services/blog.service'
interface DropdownOption {
  lable: string
  value: string
}
const sort: DropdownOption[] = [
  {
    lable: 'Mã ID',
    value: 'id',
  },
  {
    lable: 'Tiêu đề',
    value: 'title',
  },
  {
    lable: 'Nội dung',
    value: 'content',
  },
  {
    lable: 'Ngày tạo',
    value: 'created_at',
  },
  {
    lable: 'Ngày cật nhật',
    value: 'updated_at',
  },
]
export default function useBlog() {
  const [blogs, setBlogs] = useState<Blog[] | []>([])
  const [pagination, setpagination] = useState<IPagination>({} as IPagination)
  const loading = useLoading()
  const [currenPage, setCurrenPage] = useState(1)
  const [totalPage, setTotalPage] = useState<number[]>([])
  const [offset, setOffset] = useState(20)
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
    })
  }, [currenPage, offset])

  return {
    getBlogs,
    blogs,
    pagination,
    changePage,
    currenPage,
    changeOffset,
    offset,
    totalPage,
    sort,
  }
}
