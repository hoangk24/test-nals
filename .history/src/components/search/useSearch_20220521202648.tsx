import React, { useCallback, useState } from 'react'
import { getBlog } from 'services/blog.service'
import _debounce from 'lodash/debounce'
import { IGetBlogPayload } from 'constants/payloads/blog.payload'
import { Blog } from 'constants/models/blog.model'

export default function useSearch() {
  const [blog, setBlog] = useState<Blog[]>([])
  const [text, setText] = useState('')

  const getBlogs = async () => {
    try {
      const res: any = await getBlog({ search: text })
      setBlog(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const onSearch = useCallback(
    _debounce(() => getBlogs(), 300),
    [text],
  )

  // useEffect(() => {
  //   getBlogs({
  //     offset,
  //     page: currenPage,
  //     sort_by: sort.value as any,
  //     sort_direction: sortDirection.value as any,
  //   })
  //   // return onSearch.cancel
  // }, [currenPage, offset, sort, sortDirection])

  return {}
}
