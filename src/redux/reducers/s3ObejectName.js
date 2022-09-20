import * as type from '../types/s3ObejectName';

const initialState = {
  s3ObejectNames: [],
};

export default function s3ObejectName(state = initialState, action) {
  switch (action.type) {
    //
    // Get s3ObejectName.
    //
    case type.GET_S3_OBEJECT_NAME:
      return {
        ...state
      };
    //
    // Post s3ObejectName.
    //
    case type.POST_S3_OBEJECT_NAME:
      var tmpObejectNames = [...state.s3ObejectNames];
      tmpObejectNames.push(action.payload);

      return {
        ...state,
        s3ObejectNames: tmpObejectNames
      }
    //
    // Delete s3ObejectName.
    //
    case type.DELETE_S3_OBEJECT_NAME:
      return {
        ...state,
        s3ObejectNames: []
      }
    default:
      return {
        ...state,
        error: 'Did not match any case at s3ObejectName reducer.'
      };
  }
}
