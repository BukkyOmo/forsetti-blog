import { expect } from 'chai';

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../index');

chai.use(chaiHttp);

describe('TEST HOME PAGE ROUTE', () => {
  it('it should return a string', (done) => {
    chai.request('http://localhost:5500')
      .get('/')
      .end((err, res) => {
        expect(res.body.username).to.be.equal('Forsetti');
        done();
      });
  });
});
