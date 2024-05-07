const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const expect = chai.expect;
describe('Test suite for index page', function() {
  // setUp
  before((done) => {
    const port = 7865;
    // Start the Express server
    app.listen(port, () => {
      console.log(`API is listening on http://localhost:${port}`);
      done();
    });
  });

  after((done) => {
    // Close the Express server
    app.close(() => {
      console.log('Express server closed');
      done();
    });
  });

  it('Status code', function() {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status(200);
      });
  });
});
