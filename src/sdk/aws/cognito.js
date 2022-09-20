import AWS from 'aws-sdk'

export default function setCognito() {
  console.log("sdk : setCognito")
  
  AWS.config.update({
    region:      process.env.REACT_APP_AWS_REGION,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID
    })
  });
}