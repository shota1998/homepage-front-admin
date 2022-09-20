import { call, put, takeEvery } from 'redux-saga/effects';
import * as type    from '../types/editingArticle';
import * as getApi  from '../../api/editingArticle/get';
import * as editApi from '../../api/editingArticle/edit';
import * as syncApi from '../../api/editingArticle/sync';

// todo: test
/**
 * Fetch an editing article.
 * @param {*} action 
 */
 function* fetchEditingArticle(action) {
  console.log("function* fetchEditingArticle");
  try {
    const response = yield call(() => getApi.getEditingArticleByArticleId(action));
    console.log("function* fetchEditingArticle");
    yield put({ type:    type.GET_EDITING_ARTICLE_SUCCESS, 
                article: response});
  } catch (e) {
    yield
  }
}

/**
 * Edit an editing article.
 * @param {*} action 
 */
 function* editEditingArticle(action) {
  console.log("function* editEditingArticle");
  try {
    //todo : store this flesh editing articel in response.
    const response = yield call(() => editApi.editEditingArticle(action));
    yield put({ type:    type.EDIT_EDITING_ARTICLE_SUCCESS,
                article: response});
  } catch (e) {
    yield
  }
}

/**
 * Edit an article.
 * @param {*} action 
 */
 function* syncEditingArticle(action) {
  console.log("function* syncEditingArticle");
  try {
    const response = yield call(() => syncApi.syncEditingArticle(action));
    yield put({ 
      type:           type.SYNC_EDITING_ARTICLE_SUCCESS, 
      editingArticle: response
    });
  } catch (e) {
    yield
  }
}

/**
 * Reflesh an editing article.
 * @param {*} action 
 */
 function* refleshEditingArticle(action) {
  console.log("function* refleshEditingArticle");
  try {
    const response = yield call(() => editApi.refleshEditingArticle(action));
    yield put({ type: type.REFLESH_EDITING_ARTICLE_SUCCESS});

  } catch (e) {
    yield
  }
}

function* editingArticleSaga() {
  yield takeEvery(type.GET_EDITING_ARTICLE_REQUESTED,     fetchEditingArticle);
  yield takeEvery(type.EDIT_EDITING_ARTICLE_REQUESTED,    editEditingArticle);
  yield takeEvery(type.SYNC_EDITING_ARTICLE_REQUESTED,    syncEditingArticle);
  yield takeEvery(type.REFLESH_EDITING_ARTICLE_REQUESTED, refleshEditingArticle);
}

export default editingArticleSaga;