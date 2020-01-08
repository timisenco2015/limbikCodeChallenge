const Sequelize=require('sequelize');


const dbConnect = new Sequelize(process.env.RDS_DATABASE, process.env.RDS_USERNAME, process.env.RDS_PASSWORD, {
    host: process.env.RDS_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
  });

  dbConnect.authenticate().then(()=> 
  {
     console.log("Database Connected...");
   
  }).catch(err=>console.log('Error ' +err));
  module.exports = dbConnect;




