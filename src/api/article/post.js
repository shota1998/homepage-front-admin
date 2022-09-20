import * as route from '../routes/article';

/**
 * Send HTTP request, then post article data in json.
 * @returns Promise
 */
 export function post(action) {
  console.log("API : create");
  return fetch(
    route.create, 
    {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload.article)
    }
  )
  .then(response => console.log(response))
  .catch((error) => {throw error})
}
