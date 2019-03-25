import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('Posts Routes', () => {
  describe('DELETE /posts/:id', () => {
    it('should return an error if id is invalid', async () => {
      const res = await chai.request(app)
        .delete('/api/v1/posts/1');

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
    });

    it('should return an error if id does not exist', async () => {
      const res = await chai.request(app)
        .delete('/api/v1/posts/8e75ed1c-c48a-4de2-9f8c-df597aeace8f');

      expect(res).to.have.status(404);
      expect(res.body).to.have.property('error');
    });

    it('should return 200 if post is deleted successfully', async () => {
      const res = await chai.request(app)
        .delete('/api/v1/posts/a7201c6a-b026-4117-932a-852f6b5c0a4f');

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('data');
    });
  });

  describe('GET /posts', () => {
    it('should get all available posts', async () => {
      const res = await chai.request(app)
        .get('/api/v1/posts');

      expect(res).to.have.status(200);
      expect(res.body.message).to.be.equal('Successfully retrieved posts.');
      expect(res.body).to.have.property('data');
    });
  });
});
