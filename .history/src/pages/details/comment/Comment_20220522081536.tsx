import CommentItem from 'pages/details/comment/CommentItem'
import { useComment } from 'pages/details/useComment'
import React from 'react'

export default function Comment() {
  const { comments } = useComment()
  console.log('🚀 ~ file: Comment.tsx ~ line 7 ~ Comment ~ comments', comments)
  return (
    <div className='container py-2'>
      <div className='row'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <ul className='list-group'>
              {comments?.map((it: Comment) => (
                <CommentItem  comment={it} key={it.}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
