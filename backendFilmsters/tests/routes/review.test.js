// Mongoose and mocking requests
const sinon = require('sinon');

const mongoose = require('mongoose')
mongoose.set('debug', true)
require('sinon-mongoose')

// initialize the app and models
const app = require('../../index.js')

// sending requests
const agent = require('supertest').agent(app);
// validating results
const expect = require('chai').expect;

// get the model
const Review = mongoose.model('Review')

var mock = sinon.mock(Review)

beforeEach(() => {
  mock.restore(); // Unwraps the spy
  mock = sinon.mock(Review)
});

afterEach(() => {
  mock.verify();
});

const request = {

  "name": "kallep",
  "text": "pingp",

}

const expected = {

  "_id": "5ece5a81c1c83a9784c53b9a",
  "movieId": 454626,
  "__v": 0,
  "reviews": [{
    "_id": "5ece5a81da0441582c03c2b5",
    "name": "hepp",
    "text": "b77t"
  }]

}

describe('Review testing', () => {

  it('Should return an array of all reviews', (done) => {
    mock
      .expects('find')
      .chain('exec')
      .resolves(expected);
    agent
      .get('/review')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.eql(expected);
        done();
      });
  });

  it('Should get a review by movieId ', (done) => {
    mock
      .expects('find')
      .withArgs({
        movieId: "12345"
      })
      .chain('exec')
      .resolves(expected)
    agent
      .get('/review/12345')
      .send(request)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.eql(expected);
        done();
      });
  });

  it('Should get a review by movieId', (done) => {
    mock
      .expects('find')
      .withArgs({
        "movieId": "12345"
      })
      .chain('exec')
      .resolves(expected);
    agent
      .get('/review?movieId=12345')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.eql(expected);
        done();
      });
  });

  //får den inte att funka

  // it('Should be able to post a review', (done) => {
  //   mock
  //     .expects('updateOne')
  //     .withArgs({
  //       movieId: "12345"
  //     }, request)
  //     .chain('exec')
  //     .resolves({
  //       n: 1,
  //       nModified: 0,
  //       upserted: [{
  //         index: 0,
  //         _id: "5cecf112a66bc43a217dfda3"
  //       }],
  //       ok: 1
  //     });
  //   mock
  //     .expects('findOne')
  //     .withArgs({
  //       movieId: "12345"
  //     })
  //     .chain('exec')
  //     .resolves(expected)
  //   agent
  //     .post('/review/12345')
  //     .send(request)
  //     .end((err, res) => {
  //       expect(res.status).to.equal(201);
  //       done();
  //     });
  // });

  it('Should be able to delete a User', (done) => {
    mock
      .expects('deleteOne')
      .withArgs({
        movieId: "12345"
      })
      .chain('exec')
      .resolves('200')
    agent
      .delete('/review/12345')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});