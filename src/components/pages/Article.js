import React from 'react';
import { useLocation } from 'react-router-dom'
import DOMPurify       from 'dompurify';
import { marked }      from 'marked';

function Article() {
  const location = useLocation()
  const { article } = location.state

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__info'>
        <div>Article Id : {article.id}</div>
          <h1 className='cards__item__text'>{article.title}</h1>
          <div 
            className = 'cards__item__text'
            dangerouslySetInnerHTML = {{
              __html: DOMPurify.sanitize(marked(article.body))
            }}
          >
          </div>
        </div>
      </li>
    </>
  );
}

export default Article;
