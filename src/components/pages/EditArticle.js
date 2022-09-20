import React, { useEffect }         from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation }              from 'react-router-dom'
import Input       from '../Input';
import * as action from '../../redux/actions/editingArticle';

function EditArticle() {
  console.log("Component :  EditArticle")

  const location = useLocation()
  const { id } = location.state
  
  const dispatch = useDispatch();
  const editingArticle = useSelector((state) => state.editingArticle.article);
  const loading        = useSelector((state) => state.editingArticle.loading);
  const error          = useSelector((state) => state.editingArticle.error);
  const isEdited       = useSelector((state) => state.editingArticle.isEdited);

  useEffect(() => {
    const article = {id: id}
    dispatch(action.getEditingArticle(article));
  }, [isEdited]);

  return (
    <>
      { loading && <p>Loading...</p>}
      {!loading && editingArticle  && 
        <>
          <div>Editing Article Id : {editingArticle.id}</div>
          <div>Article Id : {editingArticle.article_id}</div>
          <Input 
            article = {editingArticle}
            type    = {process.env.REACT_APP_INPUT_TYPE_EDIT}
          />
        </>
      }

      {!loading && !editingArticle && <p>Error during data retrieval.</p>}
      {!loading && error           && <p>{error}</p>}
    </>
  );
}

export default EditArticle;
