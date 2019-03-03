import * as chai from 'chai';
import App from '../src/app';

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('baseRoute', () => {
  it('shows home page', () => {
    return chai.request(App).get('/').then((res) => {
      chai.expect(res.type).to.eql('text/html');
    });
  });
});