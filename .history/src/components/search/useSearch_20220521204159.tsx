import React, { useCallback, useState } from 'react'
import { getBlog } from 'services/blog.service'
import { IGetBlogPayload } from 'constants/payloads/blog.payload'
import { Blog } from 'constants/models/blog.model'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import useDebounce from 'hooks/useDebounce'
export default function useSearch() {
  const [blog, setBlogs] = useState<Blog[]>([])
  const [text, setText] = useState('')
  const debouceText = useDebounce<string>(text, 500)
  const getBlogs = async (value: string) => {
    try {
      const res: any = await getBlog({ search: value })
      setBlogs(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  // const onSearch = useCallback(
  //   useDebounce(() => console.log(text), 300),
  //   [text],
  // )

  useEffectSkipFirstRender(() => {
    getBlogs(debouceText)
  }, [debouceText])

  return { setText, blog }
}
