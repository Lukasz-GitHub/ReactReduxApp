import {ADD_COMMENT} from './actions.js';
import {REMOVE_COMMENT} from './actions.js';
import {EDIT_COMMENT} from './actions.js';
import {THUMB_UP_COMMENT} from './actions.js';
import {THUMB_DOWN_COMMENT} from './actions.js';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                        id: action.id,
                        text: action.text,
                        votesLike: 0,
                        votesDislike: 0
                    }
                    , ...state];
            
        case REMOVE_COMMENT:
           return state.filter(comment => comment.id !== action.id)
            
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.text = action.text;
                }
                
                return comment;
            });
            
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.votesLike = comment.votesLike + 1;
                }
                
                return comment;
            });
            
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.votesDislike = comment.votesDislike + 1;
                }
                
                return comment;
            });
            
        default:
            return state;
    }
};

export default comments;
