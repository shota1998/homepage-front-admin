import * as type from '../types/editingArticle';

// todo: test
//
// Get an Editing Article.
//
export function getEditingArticle(article) {
  console.log("getEditingArticle(article) : " + article)
  return {
    type: type.GET_EDITING_ARTICLE_REQUESTED,
    payload: { article },
  };
}

//
// Edit an Editing Article.
//
export function editEditingArticle(editingArticle) {
  return {
    type: type.EDIT_EDITING_ARTICLE_REQUESTED,
    payload: { editingArticle },
  };
}

//
// Sync an Editing Article with an Article.
//
export function syncEditingArticle(editingArticle) {
  return {
    type: type.SYNC_EDITING_ARTICLE_REQUESTED,
    payload: { editingArticle },
  };
}

// todo
// export function refleshEditingArticle(id) {
//   console.log("deleteArticle(id) : " + id)
//   return {
//     type: type.DELETE_ARTICLE_REQUESTED,
//     payload: { id },
//   };
// }