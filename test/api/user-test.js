//To disable logs and have an clean output.
process.env.NODE_ENV = 'test';

var expect = require('chai').expect;  
var request = require('supertest');  
var mongoose = require('mongoose');  
var mockgoose = require('mockgoose');

mockgoose(mongoose);  
var server = require('../../server');

describe('# Users api', function() {  

    describe('# Unauthenticated', function() {

        it('should not be able to list all users', function(done) {
          request(server)
            .get('/api/users')
            .expect(401)
            .end(function(err, res) {
                if (err) {
                    return done(err); 
                }
                expect(err).to.equal(null);
                done();
            });
        });
    
    });

});