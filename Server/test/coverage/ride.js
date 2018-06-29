import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './../../index';

chai.should();
chai.use(chaiHttp);

const rideRequest = {
  id: 1,
  name: 'Tony D',
  phone: '07034333484',
  comment: 'Any space for luggage',
};

describe('GET /rides', () => {
  it('it should get all ride', (done) => {
    chai.request(app)
      .get('/api/v1/rides')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('GET /rides/:id', () => {
  it('it should get a specific ride details', (done) => {
    chai.request(app)
      .get('/api/v1/rides/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('it should not get ride details if \'id\' is invalid', (done) => {
    chai.request(app)
      .get('/api/v1/rides/0')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});


describe('POST /rides/:id/request', () => {
  it('it should be able to create ride request', (done) => {
    chai.request(app)
      .post('/api/v1/rides/1/request')
      .send(rideRequest)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it('it should not create ride request if \'id\' is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/rides/0/request')
      .send(rideRequest)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
