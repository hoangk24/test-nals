import { Comment } from 'constants/models/comment.model'
import moment from 'moment'
import React from 'react'
interface Props {
  comment: Comment
}
export default function CommentItem({ comment }: Props) {
  return (
    <li className='list-group-item'>
      <div className='row'>
        <div className='col-xs-2 col-md-1'>
          <img src='http://placehold.it/80' className='img-circle img-responsive' alt='' />
        </div>
        <div className='col-xs-10 col-md-11'>
          <div>
            <div className='mic-info'>
              <a>{comment.user.name}</a> {moment(comment.created_at).format('DD/MM/YYY')}
            </div>
          </div>
          <div className='comment-text'>{comment.content}</div>
          <div className='action'></div>
        </div>
      </div>
    </li>
  )
}
