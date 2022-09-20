import * as route from '../routes/article';

/**
 * Send HTTP request, then delete an article which was specified by id.
 * @returns Promise
 */
 export function deleteArticle(action) {
  console.log("API : delete_article");
  return fetch(
    route.delete_article, 
    {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload.id)
    }
  )
  .then(response => console.log(response))
  .catch((error) => {throw error})
}