const request = require('request');
const { app, server } = require('./api');
const { expect } = require('chai');

const port = 7865;
const baseUrl = `http://localhost:${port}`;

describe('Test suite for index page', function() {
  it('Status code', function(done) {
    request(`${baseUrl}`, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other routes', function(done) {
    request(`${baseUrl}/other-routes`, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
