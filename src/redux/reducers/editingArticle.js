import * as type from '../types/editingArticle';

const initialState = {
  loading:  false,
  article:  null,
  error:    null
};

// todo: test
export default function article(state = initialState, action) {
  switch (action.type) {
    //
    // Get an Editing Article.
    //
    case type.GET_EDITING_ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_EDITING_ARTICLE_SUCCESS:
      console.log("reducer : GET_EDITING_ARTICLE_SUCCESS : " + JSON.stringify(state));
      return {
        ...state,
        loading: false,
        article: action.article,
        error:   null
      }
    case type.GET_EDITING_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    //
    // Edit an Editing Article.
    //
    case type.EDIT_EDITING_ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: action.message
      }
    case type.EDIT_EDITING_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.article,
        error:   action.message
      }
    case type.EDIT_EDITING_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    //
    // Sync an Editing Article.
    //
    case type.SYNC_EDITING_ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: action.message
      }
    case type.SYNC_EDITING_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.editingArticle,
        error:   action.message
      }
    case type.SYNC_EDITING_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return {
        ...state,
        error: 'Did not match any case at editingArticle reducer.'
      };
  }
}
