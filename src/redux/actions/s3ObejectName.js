import * as type from '../types/s3ObejectName';

//
// Get s3ObejectNames.
//
export function getS3ObejectNames() {
  return {
    type: type.GET_S3_OBEJECT_NAME
  };
}
//
// Post s3ObejectNames.
//
export function postS3ObejectName(s3ObejectName) {
  console.log("action : postArticle : " + s3ObejectName)
  return {
    type: type.POST_S3_OBEJECT_NAME,
    payload: s3ObejectName,
  };
}
//
// Delete s3ObejectNames.
//
export function deleteS3ObejectNames() {
  return {
    type: type.DELETE_S3_OBEJECT_NAME
  };
}