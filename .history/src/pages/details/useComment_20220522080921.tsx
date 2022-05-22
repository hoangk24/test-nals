import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { Blog } from 'constants/models/blog.model'
import { Comment } from 'constants/models/comment.model'
import { PropsWithChildren } from 'constants/models/common.model'
import { getCommentsAction } from 'features/blog/blog.action'
import useLoading from 'hooks/useLoading'
import React, { createContext, useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const CommentContext = createContext({})
export const useComment = () => useContext(CommentContext)
export default function CommentWrapper({ children }: PropsWithChildren) {
  const { id } = useParams()
  const [comments, setComments] = useState<Comment[]>([])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const getComment = () => {
    dispatch(
      getCommentsAction({
        id: id as string,
        data: {} as any,
      }),
    )
      .then(unwrapResult)
      .then((res) => {
        console.log('🚀 ~ file: useComment.tsx ~ line 22 ~ ).then ~ res', res)
      })
  }
  return (
    <CommentContext.Provider
      value={{
        getComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}
