import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('User routes', () => {
  describe('POST /user/create', () => {
    it('should create a new user', async () => {
      const res = await chai.request(app)
        .post('/api/v1/user/create')
        .send({
          firstname: 'John',
          lastname: 'doe',
          email: 'johndoe@gmail.com',
          password: 'password',
        });
      expect(res).to.have.status(201);
      expect(res).to.be.a('object');
    });

    it('should return 409 if user exist', async () => {
      const res = await chai.request(app)
        .post('/api/v1/user/create')
        .send({
          firstname: 'John',
          lastname: 'doe',
          email: 'johndoe@gmail.com',
          password: 'password',
        });
      expect(res).to.have.status(409);
      expect(res).to.be.a('object');
    });

    it('should return 400 if user email is invalid', async () => {
      const res = await chai.request(app)
        .post('/api/v1/user/create')
        .send({
          firstname: 'John',
          lastname: 'doe',
          email: 'johndoegmail.com',
          password: 'password',
        });
      expect(res).to.have.status(400);
      expect(res).to.be.a('object');
    });
  });
});
