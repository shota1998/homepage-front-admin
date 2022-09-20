import { all } from 'redux-saga/effects';
import article            from './article';
import editingArticleSaga from './editingArticle';

/**
 * 
 */
export default function* rootSaga() {
  yield all([
    article(),
    editingArticleSaga()
  ])
}