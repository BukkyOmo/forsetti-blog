import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import postDummyData from './stubs/postDummyData';

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

  describe('PATCH /posts/:id', () => {
    it('should return an error if id is invalid', async () => {
      const res = await chai.request(app)
        .patch('/api/v1/posts/1');

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
    });

    it('should return an error if post does not exist', async () => {
      const res = await chai.request(app)
        .patch('/api/v1/posts/8e75ed1c-c48a-4de2-9f8c-df597aeace8f');

      expect(res).to.have.status(404);
      expect(res.body).to.have.property('error');
    });

    it('should return an error if title or body is invalid', async () => {
      const res = await chai.request(app)
        .patch('/api/v1/posts/8e75ed1c-c48a-4de2-9f8c-df597aeace8f')
        .send(postDummyData.invalidPostObject);

      expect(res).to.have.status(400);
      expect(res.body).to.have.property('error');
    });

    it('should return edited title if post was edited successfully', async () => {
      const res = await chai.request(app)
        .patch('/api/v1/posts/0be24c67-7eaf-4f44-b1ff-faf7a8289816')
        .send(postDummyData.validPostObjectOne); // Post was created by DB seeder

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('title').eql(postDummyData.validPostObjectOne.title);
    });

    it('should return edited body if post was edited successfully', async () => {
      const res = await chai.request(app)
        .patch('/api/v1/posts/0be24c67-7eaf-4f44-b1ff-faf7a8289816')
        .send(postDummyData.validPostObjectTwo); // Post was created by DB seeder

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('body').eql(postDummyData.validPostObjectTwo.body);
    });

    it('should return edited post if entire post was edited successfully', async () => {
      const res = await chai.request(app)
        .patch('/api/v1/posts/0be24c67-7eaf-4f44-b1ff-faf7a8289816')
        .send(postDummyData.validPostObjectThree); // Post was created by DB seeder

      expect(res).to.have.status(200);
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('title').eql(postDummyData.validPostObjectThree.title);
      expect(res.body.data).to.have.property('body').eql(postDummyData.validPostObjectThree.body);
    });
  });
});
