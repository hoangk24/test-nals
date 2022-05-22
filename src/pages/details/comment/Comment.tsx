import { IComment } from 'constants/models/comment.model'
import CommentItem from 'pages/details/comment/CommentItem'
import CreateComment from 'pages/details/comment/CreateComment'
import { useComment } from 'pages/details/useComment'
import React from 'react'

export default function Comments() {
  const { comments } = useComment()
  console.log('🚀 ~ file: Comment.tsx ~ line 7 ~ Comment ~ comments', comments)
  return (
    <div className='container py-2'>
      <div className='row'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <ul className='list-group'>
              {comments?.map((it: IComment) => (
                <CommentItem comment={it} key={it.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <CreateComment />
    </div>
  )
}
