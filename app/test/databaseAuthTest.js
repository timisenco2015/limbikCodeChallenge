const assert = require('chai').assert;
let databseAuthentication = require('../../app/config/databaseAuth');
describe('test DatabaseAuth in config folder', function()
{
    it('Test if the database was sucessfully setup and connected', async () => 
    {

        try
        {
            databseAuthentication.databseAuthentication().then((message)=> 
            {
                assert.equal("Database connected...",message) 
            })
            .catch(err=>
            {
                
                assert.Fail(err.Message);
            });
           
        }
        catch (ex)
        {
        
           // Assert.Fail(ex.Message);
        }
       
      
    });
       
      
    });
    
    
