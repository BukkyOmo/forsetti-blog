import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);

describe('TEST ROUTE FOR CREATING POSTS', () => {
  it('it should successfully create a post', async () => {
    const res = await chai.request(app)
      .post('/api/v1/posts')
      .send({
        title: 'My sample title',
        body: 'This is the body of my sample data',
      });
    expect(res.statusCode).to.equal(201);
    expect(res.body.data).to.have.property('title');
    expect(res.body.data).to.have.property('body');
    expect(res.body.data.title).to.equal('My sample title');
    expect(res.body.data.body).to.equal('This is the body of my sample data');
  });

  it('it should throw an error for an empty title field', async () => {
    const res = await chai.request(app)
      .post('/api/v1/posts')
      .send({
        title: '',
        body: 'This is the body of my sample data',
      });
    expect(res.statusCode).to.equal(400);
    expect(res.body).to.have.property('message');
    expect(res.body.message).to.equal('Title Field is empty');
  });

  it('it should throw an error for an empty body field', async () => {
    const res = await chai.request(app)
      .post('/api/v1/posts')
      .send({
        title: 'My sample title',
        body: '',
      });
    expect(res.statusCode).to.equal(400);
    expect(res.body).to.have.property('message');
    expect(res.body.message).to.equal('Body Field is empty');
  });
});
