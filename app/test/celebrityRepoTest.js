const assert = require('chai').assert;
require('dotenv').config('./app/config');

let celebrityRepo = require('../../app/repo/celebrityRepo');

describe('test celebrity repo', function()
{

    it("testing getAllList() function of celebrityRepo", async () => 
    {
        try
        {
         
            let value = await celebrityRepo.getAllList();
            let celebrity = JSON.parse(value.data[0]);
            assert.equal(celebrity.lastName,"Bolt");
        }
        catch(err)
        {
           
        }
      
    });

   
});


 
  
 