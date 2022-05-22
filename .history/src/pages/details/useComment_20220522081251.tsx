import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { Comment } from 'constants/models/comment.model'
import { PropsWithChildren } from 'constants/models/common.model'
import { getCommentsAction } from 'features/blog/blog.action'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
interface ICommentContext {
  comments: Comment[]
}
const CommentContext = createContext({})
export const useComment = () => useContext(CommentContext)
export default function CommentWrapper({ children }: PropsWithChildren) {
  const { id } = useParams()
  const [comments, setComments] = useState<Comment[]>([])
  const dispatch = useAppDispatch()
  const getComment = () => {
    console.log('co goi')

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
  useEffect(() => {
    getComment()
  }, [])

  return (
    <CommentContext.Provider
      value={{
        comments,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}
