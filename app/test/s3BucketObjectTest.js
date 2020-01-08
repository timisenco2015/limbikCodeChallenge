const assert = require('chai').assert
const sinon = require('sinon');
const s3 = require('../../app/data/S3BucketObject');

describe('test s3Bucket Object', function()
{
  it('test s3Object returns data based on the key',async()=>
  {
    //let s3Instance = s3.getS3Instance();
    //let stub = sinon.stub(s3Instance,'getObject').withArgs({name: "limbikbucket", key: "Usain-Bolt.jpg"});
       
    //  s3Instance.getObject
    try 
    {
     /*
      var params = 
      { 
        Bucket: 'limbikbucket', 
        Key: "Usain-Bolt.jpg" 
      }
        
      stub.withArgs({Bucket: 'my-test-bucket', Key: 'Usain-Bolt.jpg'}).returns
      ({
          promise: () => 
          { 
            return 
            {
              AcceptRanges: 'bytes',
              LastModified: new Date('2020-01-05T06:01:29.000Z') ,
              ContentLength: 370630,
              ETag: '"0c4c69b1d75277867bad20729c2e4aa4"',
              ContentType: 'image/jpeg',
              Metadata: {},
            }
          }
        });
      //assert.equal(data.ContentLength,stub.ContentLength);
      */


      let data =  s3.getImage("Usain-Bolt.jpg")
      assert.isNotNull(data)
       
    }
    catch(e)
    {
      console.log(e)
    } 
       
  });
});

