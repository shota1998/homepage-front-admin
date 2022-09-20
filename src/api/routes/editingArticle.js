const BASE_URL = process.env.REACT_APP_API_SERVER_BASE_URL + 'editing_article/';

export const get_editing_article_by_article_id = BASE_URL + `get_by_article_id`;
export const edit_editing_article              = BASE_URL + `edit`;
export const sync_article                      = BASE_URL + `reflect`;
export const reflesh_editing_article           = BASE_URL + `reflesh`;