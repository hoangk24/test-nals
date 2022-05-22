import React from 'react'

export default function useSearch() {
  const onSearch = useCallback(
    _debounce(() => search(), 300),
    [text],
  )
  return {}
}
