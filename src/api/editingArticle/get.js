import * as route from '../routes/editingArticle';

//todo: test
/**
 * Send HTTP request, then get article data in json.
 * @returns Promise
 */
 export function getEditingArticleByArticleId(action) {
  console.log("API : get_editing_article_by_article_id");
  return fetch(
    route.get_editing_article_by_article_id + "?id=" + action.payload.article.id, 
    {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then(response => response.json())
  .catch((error) => {throw error})
}