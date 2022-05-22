import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { IComment } from 'constants/models/comment.model'
import { PropsWithChildren } from 'constants/models/common.model'
import { CreateCommentPayload } from 'constants/payloads/comment.payload'
import { createCommentsAction, getCommentsAction } from 'features/blog/blog.action'
import { useLoading } from 'hooks/useLoading'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
interface ICommentContext {
  comments: IComment[]
  createComment = (data: CreateCommentPayload, fn: () => void)
}
const CommentContext = createContext<ICommentContext>({} as ICommentContext)
export const useComment = () => useContext(CommentContext)
export default function CommentWrapper({ children }: PropsWithChildren) {
  const { id } = useParams()
  const [comments, setComments] = useState<IComment[]>([])
  const dispatch = useAppDispatch()
  const loading = useLoading()
  const getComment = () => {
    loading.show()
    dispatch(
      getCommentsAction({
        id: id as string,
        data: {} as any,
      }),
    )
      .then(unwrapResult)
      .then((res) => {
        setComments(res.data.items)
      })
      .finally(() => loading.hide())
  }
  const createComment = (data: CreateCommentPayload, fn: () => void) => {
    loading.show()
    dispatch(
      createCommentsAction({
        id: id as string,
        data,
      }),
    )
      .then(unwrapResult)
      .then((res) => {
        toast.success('Tạo comment thành công!')
        console.log(res)
      })
      .finally(() => loading.hide())
  }
  useEffect(() => {
    getComment()
  }, [])

  return (
    <CommentContext.Provider
      value={{
        comments,
        createComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}
