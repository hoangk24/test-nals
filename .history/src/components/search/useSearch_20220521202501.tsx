import React, { useCallback, useState } from 'react'
import { getBlog } from 'services/blog.service'
import _debounce from 'lodash/debounce'

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
