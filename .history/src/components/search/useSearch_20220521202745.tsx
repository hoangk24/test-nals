import React, { useCallback, useState } from 'react'
import { getBlog } from 'services/blog.service'
import _debounce from 'lodash/debounce'
import { IGetBlogPayload } from 'constants/payloads/blog.payload'
import { Blog } from 'constants/models/blog.model'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'

export default function useSearch() {
  const [blog, setBlog] = useState<Blog[]>([])
  const [text, setText] = useState('')

  const getBlogs = async () => {
    try {
      const res: any = await getBlog({ search: text })
      setBlog(res.data)
    } catch (error) {}
  }

  const onSearch = useCallback(
    _debounce(() => getBlogs(), 300),
    [text],
  )

  useEffectSkipFirstRender(() => {
    return onSearch.cancel
  }, [text, onSearch])

  return {}
}
