import React from 'react'

export default function useSearch() {
    const [text, setText] = useState('')

  const onSearch = useCallback(
    _debounce(() => search(), 300),
    [text],
  )
  return {}
}
