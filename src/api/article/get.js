import * as route from '../routes/article';

/**
 * Send HTTP request, then get article data in json.
 * @returns Promise
 */
 export function getAllArticles() {
  console.log("API : get_all_articles");
  return fetch(
    route.get_all_articles, 
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