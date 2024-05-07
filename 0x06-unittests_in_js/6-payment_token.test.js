// Asynchronous test
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI test suite', function() {
  it('Successful API response', function() {
    // Call the asynchronous function under test
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Ensure response is correct
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch(error => {
        // If an error occurs, fail the test
        done(error);
      });
  });
});
