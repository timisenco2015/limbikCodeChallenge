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
  
  ```

## Code details
```bash
  - apiService (service folder): has a method called getAllCelebrities() with parameter. This method calls http get method. API Url is passed to the http get method from app.config.ts using @Inject(). http get method fecthes data from the server and return an Observable
  
  
  - CelebrityService (service folder) 
  
      -- methods are:
      
          -- getCelebrities(): this method get all celebrities from the databse by calling  getAllCelebrities in API Service. It returns Observable
          
          -- filterByFirstName(): filters celebrities list using firstname. It accepts firstname as parameter
          
          -- filterByLastName(): filters celebrities list using lastname. It accepts lastname as parameter
          
          -- filterByProfession(): filters celebrities list using profession. It accepts profession as parameter
   
   - ApiService  (service folder)
   
        -- getCelebrities(): this method get all celebrities from the databse by calling http get. It returns Observable
        
        
  - celebrity (entity folder): is the celebrity class
  
      -- methods are: setId(id:number), getId(), setFirstName(firstName:string), getFirstName(), setLastName(lastName:string), getLastName(), setProfession(profession:string),  getProfession(), setProfile(profile:any), getProfile()
  
  - component (celebrity): View and Controll of the angular application
    
    - celebrity.component.ts file: controller of the angular web applications. fecthes data from database Celebrity Service class, process the data and sent needed data to the view for display
    
    - celebrity.component.html: the view
    
    - celebrity.component.css: css file
  
  - Test Files
    
    - celebrityTest
    
    - entityTest
    
    - serviceTest
    
    Well written test files using Jasmine and Karma
    
      
      
      
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
