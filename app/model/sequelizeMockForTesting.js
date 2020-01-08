var SequelizeMock = require('sequelize-mock');
var DBConnectionMock = new SequelizeMock();

var UserMock = DBConnectionMock.define('users', {
  'id':'1',
  'firstname': 'Usain',
  'lastname': 'bolt',
  'profession': 'Field Athlete',
}, {
  instanceMethods: {
      myTestFunc: function () {
          return 'Test User';
      },
  },
});





module.exports  = UserMock;