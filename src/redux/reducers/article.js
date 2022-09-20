import * as type from '../types/article';

const initialState = {
  loading: false,
  articles: [],
  error: null
};

export default function article(state = initialState, action) {
  switch (action.type) {
    //
    // Get Article.
    //
    case type.GET_ALL_ARTICLE_REQUESTED:
    case type.GET_ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.articles,
        error: null
      }
    case type.GET_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    //
    // Post Article.
    //
    case type.POST_ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: action.message
      }
    case type.POST_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.POST_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    //
    // Edit Article.
    //
    case type.EDIT_ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: action.message
      }
    case type.EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.EDIT_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    //
    // Delete Article.
    //
    case type.DELETE_ARTICLE_REQUESTED:
      return {
        ...state,
        loading: true,
        error: action.message
      }
    case type.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.DELETE_ARTICLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return {
        ...state,
        error: 'Did not match any case at article reducer.'
      };
  }
}
