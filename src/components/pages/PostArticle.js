import React from 'react';
import Input from '../Input';

function PostArticle() {
  return (
    <>
      <Input 
        type = {process.env.REACT_APP_INPUT_TYPE_POST}
      />
    </>
  );
}

export default PostArticle;
