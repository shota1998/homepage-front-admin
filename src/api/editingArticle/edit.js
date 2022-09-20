import * as route from '../routes/editingArticle';

/**
 * Send HTTP request, then post article data in json.
 * @returns Promise
 */
 export function editEditingArticle(action) {
  console.log("API : edit_editing_article");
  console.log(action);
  return fetch(
    route.edit_editing_article, 
    {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload.editingArticle)
    }
  )
  .then(response => response.json())
  .catch((error) => {throw error})
}

/**
 * Send HTTP request, then post article data in json.
 * @returns Promise
 */
 export function refleshEditingArticle(action) {
  console.log("API : reflesh_editing_article");
  console.log(action);
  return fetch(
    route.reflesh_editing_article,
    {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload.article)
    }
  )
  .then(response => response.json())
  .catch((error) => {throw error})
}