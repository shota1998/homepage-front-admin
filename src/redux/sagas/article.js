import { call, put, takeEvery } from 'redux-saga/effects';
import * as type      from '../types/article';
import * as postApi   from '../../api/article/post';
import * as getApi    from '../../api/article/get';
import * as deleteApi from '../../api/article/delete';

/**
 * Fetch all articles.
 */
function* fetchAllArticle() {
  console.log("function* fetchAllArticle");
  try {
    const response = yield call(() => getApi.getAllArticles());
    yield put({ type: type.GET_ARTICLE_SUCCESS, articles: response.articles});
  } catch (e) {
    yield
  }
}

/**
 * Post an article.
 * @param {*} action 
 */
 function* postArticle(action) {
  console.log("function* postArticle");
  try {
    const response = yield call(() => postApi.post(action));
    yield put({ type: type.POST_ARTICLE_SUCCESS});
  } catch (e) {
    yield
  }
}

/**
 * Delete an article.
 * @param {*} action 
 */
 function* deleteArticle(action) {
  console.log("function* deleteArticle");
  console.log(action);
  try {
    const response = yield call(() => deleteApi.deleteArticle(action));
    yield put({ type: type.DELETE_ARTICLE_SUCCESS});
  } catch (e) {
    yield
  }
}

function* articleSaga() {
  // yield takeEvery(type.GET_ARTICLE_BODY_REQUESTED, fetchArticleBody);
  yield takeEvery(type.GET_ALL_ARTICLE_REQUESTED,      fetchAllArticle);
  yield takeEvery(type.POST_ARTICLE_REQUESTED,         postArticle);
  yield takeEvery(type.DELETE_ARTICLE_REQUESTED,       deleteArticle);
}

export default articleSaga;