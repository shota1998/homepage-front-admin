import { combineReducers } from 'redux';
import article        from './article';
import editingArticle from './editingArticle';
import s3ObejectName  from './s3ObejectName';

const rootReducer = combineReducers({
  article:        article,
  editingArticle: editingArticle,
  s3ObejectName:  s3ObejectName,
});

export default rootReducer;
