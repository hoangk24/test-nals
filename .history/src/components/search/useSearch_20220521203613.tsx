import React, { useCallback, useState } from 'react'
import { getBlog } from 'services/blog.service'
import { IGetBlogPayload } from 'constants/payloads/blog.payload'
import { Blog } from 'constants/models/blog.model'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import useDebounce from 'hooks/useDebounce'
export default function useSearch() {
  const [blog, setBlogs] = useState<Blog[]>([])
  const [text, setText] = useState('')

  const getBlogs = async () => {
    try {
      const res: any = await getBlog({ search: text })
      setBlogs(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onSearch = useCallback(
    useDebounce(() => getBlogs(), 300),
    [text],
  )

  useEffectSkipFirstRender(() => {
    return onSearch.cancel
  }, [text, onSearch])

  return { setText, blog }
}
