const assert = require('chai').assert;
let celebrity = require('../../app/entity/celebrity');
var app = require('../../server');
const request = require('supertest');
const expect = require("chai").expect;

describe('Celebrity List API Integration Tests', function() 
{
    describe('#GET / list', function() 
    { 
      it('should get all celebrities', function(done) 
      { 
        request(app) .get('/celebrity/getAll')
        .end(function(err, res) 
        { 

            expect(res.status).to.equal(200); 
            expect(res.body).not.to.be.empty; 
            done(); 
            
        });

    });

    });

});
 