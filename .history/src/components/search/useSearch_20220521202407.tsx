import React, { useCallback, useState } from 'react'

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
  const onSearch = useCallback(
    _debounce(() => search(), 300),
    [text],
  )
  return {}
}
