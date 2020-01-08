
require('dotenv').config('./app/config');
const celebrityModel = require(process.env.MODELENDPOINT);
console.log(celebrityModel);
var s3= require('../data/S3BucketObject');
const  fs  = require('fs');
var path = require('path');

class celebrityRepo
{
    constructor() 
    {
          
    }

   
    // read data from celebrity json file in data folder and store the data into the database
    populateTable()
    {
        if(path.extname(process.env.celebrityDataPath)=='.json')
        {
            
            var celebrityList= this.readData();
           
            celebrityModel.sync({force: true}).then(function () 
            {
                celebrityList.forEach((celebrityDetails)=>
                {
                           
                    return celebrityModel.create(
                    {

                        firstname:celebrityDetails.firstName,middlename:celebrityDetails.middleName,lastname:celebrityDetails.lastName,profession:celebrityDetails.profession
                    })
                    .catch(err => 
                    {
                        console.log(err);
                    })
                            
                });
                })
                .catch(() =>
                {
                    console.log("Unabale to sync the database in app - repo - celebrityRepo - populateTable() - line 41 ");
                })
            
            }

        else
        {
            console.log("response from path extension error in app - repo - celebrityRepo - populateTable() - line 47 ")
            
        }
            
    }

    //this method is been called from populateTable to read json file
    readData()
    {
        let celebrityList=null;

        var data=fs.readFileSync(process.env.celebrityDataPath, 'utf8');

        try 
        {
            celebrityList= JSON.parse(data);
        }
        catch(err) 
        {
            console.log("response from JSON in app - repo - celebrityRepo - readData() - line 59 ",err)
        }

        return celebrityList;
        
    }

    // get all celebrities from the database
    async getAllList(req, res) 
    {
        var celebrityList = [];
        
        try 
        { 
            await celebrityModel.findAll().then(async model => 
            {
                            
              
                for(var modelItem of model) 
                {
                                  
                    let celebrity = require('../entity/celebrity');
                    celebrity.setLastName(modelItem.dataValues.lastname);
                    celebrity.setFirstName(modelItem.dataValues.firstname);
                    celebrity.setProfession(modelItem.dataValues.profession);
                    celebrity.setId(modelItem.dataValues.id);
                    let key = modelItem.dataValues.firstname + "-" + modelItem.dataValues.lastname + ".jpg";
                    let imageBytes =  await s3.getImage(key);
                    celebrity.setProfile(imageBytes);
                    celebrityList.push(JSON.stringify(celebrity));
                }
                             
            })
            .catch(err=>
            {
                return res.status(500).send({ message: err.message });
            });
                        
        } 
        catch (e) 
        {
            return res.status(500).send({ message: e.message });
        }
            
        return { status: 200,statusDesc:"succesful", data:celebrityList, message: 'Service Request list fetched Successfully' };
        
    }
}

    module.exports = new celebrityRepo();