import * as route from '../routes/editingArticle';

/**
 * Send HTTP request, then post article data in json.
 * @returns Promise
 */
 export function syncEditingArticle(action) {
  console.log("API : sync_article");
  console.log(action);
  return fetch(
    route.sync_article,
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
  .catch((error) => {throw error});
}