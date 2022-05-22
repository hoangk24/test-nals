import CommentItem from 'pages/details/comment/CommentItem'
import useComment from 'pages/details/useComment'
import React from 'react'

export default function Comment() {
  return (
    <div className='container py-2'>
      <div className='row'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <ul className='list-group'>{/* <CommentItem /> */}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}
