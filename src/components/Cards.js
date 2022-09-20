import React, { useEffect }         from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItem          from './CardItem';
import { getAllArticle } from '../redux/actions/article';
// import './Cards.css';

function Cards() {
  console.log("Component :  Cards")

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);
  const loading  = useSelector((state) => state.article.loading);
  const error    = useSelector((state) => state.article.error);

  useEffect(() => {
    dispatch(getAllArticle());
  }, []);

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {loading && <p>Loading...</p>}

          {articles.length > 0 && articles.map((article) => (
            <CardItem
                key={article.id}
                article={article}
                path={"/article"}
            /> 
          ))}

          {articles.length === 0 && !loading && <p>No Articles available!</p>}
          {error && !loading && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Cards;
