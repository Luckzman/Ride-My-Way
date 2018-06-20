import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './../../index';

chai.should();
chai.use(chaiHttp);

const rideOffer = {
  name: 'Abiodun J.',
  source: 'Mowe',
  destination: 'Oshodi',
  departure_time: '8:30',
  car: 'Toyota Camry',
  available_seats: 3,
  cost: 800,
};

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

describe('POST /rides', () => {
  it('it should be able to create ride offer', (done) => {
    chai.request(app)
      .post('/api/v1/rides')
      .send(rideOffer)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('POST /rides', () => {
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
        res.should.have.status(404);
        done();
      });
  });
});
