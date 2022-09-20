const BASE_URL = process.env.REACT_APP_API_SERVER_BASE_URL  + 'article/';

export const create           = BASE_URL + `create`;
export const get_all_articles = BASE_URL + `get_all`;
export const delete_article   = BASE_URL + `delete`;