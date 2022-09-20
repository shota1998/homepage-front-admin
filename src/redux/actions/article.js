import * as type from '../types/article';

// todo: test
//
// Get all Article.
//
export function getAllArticle() {
  return {
    type: type.GET_ALL_ARTICLE_REQUESTED
  };
}

//
// Post Article.
//
export function postArticle(article) {
  console.log("postArticle(article)" + article)
  return {
    type: type.POST_ARTICLE_REQUESTED,
    payload: { article },
  };
}

//
// Edit an Article.
//
export function editArticle(article) {
  return {
    type: type.EDIT_ARTICLE_REQUESTED,
    payload: { article },
  };
}

//
// Delete Article.
//
export function deleteArticle(id) {
  console.log("deleteArticle(id) : " + id)
  return {
    type: type.DELETE_ARTICLE_REQUESTED,
    payload: { id },
  };
}

// todo
// export function pendArticle(id) {
//   console.log("deleteArticle(id) : " + id)
//   return {
//     type: type.DELETE_ARTICLE_REQUESTED,
//     payload: { id },
//   };
// }