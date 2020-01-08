// setup environment variable
require('dotenv').config('./app');
const AWS = require('aws-sdk');
var s3;
//const async = require("async");

class AWSConfiguration
{
    constructor()
    {
       //configuring the AWS environment
      AWS.config.update(
        {
          accessKeyId:process.env.AWSACCESSKEY,
          secretAccessKey:process.env.SECRETACCESSKEY 
        }
      );

     
    }



  // get image from s3Object using key (firstname and lastname of each celebrity e.g. Usain-Bolt.jpg)
  async getImage (key) 
  {  
     
    var s3 = new AWS.S3(); 
    var params = 
    { 
      Bucket: 'limbikbucket', 
      Key: key 
    }
    try 
    {
      var data = await s3.getObject(params).promise();
      return data.Body.toString('base64');
    } catch(e) 
    {
      return "";
    }    
  }
}
  
module.exports = new AWSConfiguration();





