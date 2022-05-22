import React, { useCallback, useState } from 'react'
import { getBlog } from 'services/blog.service'
import { IGetBlogPayload } from 'constants/payloads/blog.payload'
import { Blog } from 'constants/models/blog.model'
import { useEffectSkipFirstRender } from 'hooks/useEffectSkipFirstRender'
import useDebounce from 'hooks/useDebounce'
export default function useSearch() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [text, setText] = useState('')
  const debouceText = useDebounce<string>(text, 200)
  const getBlogs = async (value: string) => {
    try {
      const res: any = await getBlog({ search: value })
      setBlogs(res.data.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffectSkipFirstRender(() => {
    getBlogs(debouceText)
  }, [debouceText])

  return { setText, blogs }
}
