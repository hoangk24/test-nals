import React, { useCallback, useState } from 'react'
import { getBlog } from 'services/blog.service'

export default function useSearch() {
  const [text, setText] = useState('')
  const search = () => {
    //  dispatch(searchProductDetailAction({ search: text }))
    //    .then(unwrapResult)
    //    .then((res: any) => {
    //      setProduct(res.data)
    //    })
  }
  const getBlogs = async (data: IGetBlogPayload) => {
    try {
      const res: any = await getBlog(data)
    } catch (error) {
      console.log(error)
    }
  }
  const onSearch = useCallback(
    _debounce(() => search(), 300),
    [text],
  )
  return {}
}
