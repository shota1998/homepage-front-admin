import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteArticle } from '../redux/actions/article';

function CardItem(props) {
  console.log("Component :  CardItem")

  const stateArticle = { 
    article: props.article
  };

  const stateArticleId = { 
    id: props.article.id
  };

  const onClickDelete = (article) => {
    const id = {
      id: article.id
    }    

    dispatch(deleteArticle(id))
  };

  const dispatch = useDispatch();

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' 
              to={{
                  pathname: props.path,
                  state:    stateArticle
                }}
        >
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.article.title}</h5>
            <h5 className='cards__item__text'>{props.article.created_date}</h5>
          </div>
        </Link>
        <Link className='cards__item__link' 
              to={{
                  pathname: "edit_article",
                  state:    stateArticleId
                }}
        >
          <button>Edit</button>
        </Link>
        <button onClick={ () => onClickDelete(props.article) }>Delete</button>
      </li>
    </>
  );
}

export default React.memo(CardItem);
