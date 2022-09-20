import { batch } from 'react-redux';
import AWS       from 'aws-sdk'

import * as  s3ObejectName from '../../redux/actions/s3ObejectName';

export function generateImageUploadFunction (dispatch, 
                                             s3ObejectNames, 
                                             setMarkdownValue) {
  
  return function imageUploadFunction (file) {
    console.log("function : imageUploadFunction")
    console.log("process.env.REACT_APP_AWS_BUCKET_NAME : " + process.env.REACT_APP_AWS_BUCKET_NAME)

    const UPLOAD_TIME  = new Date()
    const UPLOAD_MONTH = UPLOAD_TIME.getMonth()    + 1
    const OBJECT_KEY   = UPLOAD_TIME.getFullYear() + "_" 
                       + UPLOAD_MONTH              + "_" 
                       + UPLOAD_TIME.getDate()     + "_" 
                       + UPLOAD_TIME.getUTCHours() + "_" 
                       + UPLOAD_TIME.getMinutes()  + "_" 
                       + UPLOAD_TIME.getSeconds();
    
    // Upload.
    var upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket : process.env.REACT_APP_AWS_BUCKET_NAME,
        Key    : OBJECT_KEY,
        Body   : file
      }
    });

    var promise = upload.promise();

    promise.then(
      function(data) {
        console.log(data)
        alert("Successfully uploaded image.");

        batch(() => {
          // todo : replace this local state with reducer.
          // Add html to the body with the path to this image.
          setMarkdownValue((markdownValue) => {
            return markdownValue + `![image](${data.Location})`;
          })

          // Store image url which will be included in markdown.
          dispatch(s3ObejectName.postS3ObejectName(OBJECT_KEY));
          s3ObejectNames.push(OBJECT_KEY);
        })

        return;
      },

      function(err) {
        return alert("There was an error uploading your image: ", err.message);
      }
    );
  };
}