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
  const onSearch = useCallback(
    _debounce(() => search(), 300),
    [text],
  )
  return {}
}
