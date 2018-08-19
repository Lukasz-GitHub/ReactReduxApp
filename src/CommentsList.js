import React from 'react';
import Comment from './CommentsContainer';
import './List.css'

const CommentsList = ({comments}) => <ul className='List'>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>

export default CommentsList;
