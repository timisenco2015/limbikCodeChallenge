const Sequelize = require('sequelize');
const db = require('../config/databaseAuth');

var celebrities = db.define('celebrities',
{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: true
          }
      },
     
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          is: /^[a-z][a-z\s-]*$/i 
          }
        
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        is: /^[a-z][a-z\s]*$/i 
        }
      }
},{
   timestamps: false,
   freezeTableName: true,
   
},{
  indexes: [
      {
          unique: true,
          fields: ['firstname', 'lastname']
      }
  ]
});
celebrities.sync();
module.exports  = celebrities;