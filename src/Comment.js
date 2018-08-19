import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Comment = ({text, votesLike, votesDislike, id, thumbUpComment, thumbDownComment, editComment, removeComment}) => 
    <li>
        <div>
            <FontAwesomeIcon icon="trash-alt" onClick={() => removeComment(id)} />
        </div>
        <p> {text} </p>
        <div>
            <span> <FontAwesomeIcon icon="thumbs-up" onClick={() => thumbUpComment(id)} /> {votesLike} </span>
            <span> <FontAwesomeIcon icon="thumbs-down" onClick={() => thumbDownComment(id)} /> {votesDislike} </span>
        </div>
    </li>

export default Comment;
