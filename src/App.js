import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faThumbsUp, faThumbsDown, faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faThumbsDown, faTrashAlt, faEdit);

const App = () => {
  return (
      <div className="App">
        <h1>Lista komentarzy:<img src='https://png.icons8.com/cotton/2x/filled-chat.png' alt='logo' /></h1>
        <CommentsListContainer />
      </div>
  );
};

export default App;
