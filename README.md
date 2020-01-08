# limbikCodeChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Description

A restful api built with NodeJS. The api gets all celebrities list from the database and sent the data to the web application (imbikCodeChallengeFrontEnd). It uses sequelize for the ORM. The database use for this api is MySQL and it is hosted on AWS RDS.It stores celebrities pictures on AWS S3Bucket. It is a well tested (unit and integration) application.

## Development server

Run `node server` for a dev server. To able to use this applications, users will have to set environment variables.The environment file is not on github. Contact me for more information



## Running unit tests

Run `npm test` to execute the unit tests via [Mocha](https://github.com/mochajs/mocha).


## Build Code Structure
```bash
| -- src
  |
  | -- app 
  |
    | -- config
    |
      | -- databaseAuth
    |
    | -- data
    |
      | -- celebrity
      |
      | --  S3BucketObject
    |
    | -- entity
    |
      | -- celebrity
    |
    | -- model
    |
      | -- celebrityModel
      |
      | -- sequelizeMockForTesting
    |
    | -- repo
    |
      | -- celebrityRepo
    |
    | -- routes
    |
      | -- api
      |
        | -- celebrityRoute
      |
    |
  | -- test 
  |
    | -- celebrityRepoTest
    |
    | -- celebrityRouteTest
    |
    | -- celebrityTest
    | 
    | -- databaseAuthTest
    |
    | -- IntegrationTest
    |
    | -- s3BucketObjectTest
  |
|
  ```

## Code details
```bash
  - databaseAuth (config folder): configure and setup sequelize and mysql
  
  
  - celebrity (data): json folder that contains all the list of 90 celebrities. The file contains firstname, lastname, and profession
  
  
  - S3BucketObject: setup connections to aws S3. using aws-sdk for nodejs. 
  
    -- methods:
    
          --- getImage: this method accepts key (e.g. george-bush.jpg) as argument and returns image bytes from s3Object
          
          
  - celebrity (entity): the Celebrity class
  
    -- methods: setId(id), getId(), setFirstName(firstName), getFirstName(), setLastName(lastName), getLastName(), setProfession(profession), getProfession(), setProfile(profile), getProfile()
  
  
  - celebrityService (service folder) 
  
      -- methods are:
      
  - celebrityModel (model): this celebrity Sequelize model that will persisted to the mysql data.  
  
  
  - sequelizeMockForTesting (model): mock sequelize for testing celebrityRepo
  
  
  - celebrityRepo
      
      -- methods:
      
          --- populateTable(): reads data from json file (celebrity.json in data folder) and stores data in the database
          
          --- readData(): populateTable() calls this method to read data from file
          
          --- getAllList(): accepts res and req as arguments. It read all celebrities from the database and send result               to the router using res
  
  
  - routes
  
    -- api
    
      --- celebrityRoute
      
        ---- router.get: when user enters url. NodeJS accept the url and call this method which gets result from the database. sends result to user
  
  
  - celebrityRepoTest
  
  - celebrityRouteTest
  
  - celebrityTest
  
  - databaseAuthTest
  
  - IntegrationTest
  
   - s3BucketObjectTest     
         
    Well written test files using Mocha, chai, sinon, spy, assert
    
 - It uses flat-cache for caching
    
      
      
      
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
