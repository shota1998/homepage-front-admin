import AWS from 'aws-sdk';

import * as  s3ObejectName from '../../redux/actions/s3ObejectName';

export function deleteS3Object (s3ObejectNames, dispatch) {
  if (s3ObejectNames.length) {
    console.log("----- START DELETE S3 OBJECT --------");
    
    // Delete images which were uploaded before this unload.
    var keies = Array();
    s3ObejectNames.forEach(url => {
      keies.push(
        {
          Key: url
        }
      )
    });
    
    var params = {
      Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
      Delete: {
        Objects: keies,
        Quiet: false
      }
    };

    var s3 = new AWS.S3();

    s3.deleteObjects(params, (err, data) => {
      // todo : Store error message which tells error and will be displayed on other pages.
      if (err) console.log(err, err.stack);
      else {
        console.log(data);
        dispatch(s3ObejectName.deleteS3ObejectNames());
      }
    });
  } 
};