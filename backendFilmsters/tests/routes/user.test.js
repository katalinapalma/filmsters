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
const User = mongoose.model('User')

var mock = sinon.mock(User)

beforeEach(() => {
	mock.restore(); // Unwraps the spy
	mock = sinon.mock(User)
});

afterEach(() => {
	mock.verify();
});

const request = {

	"firstname": "kallep",
	"lastname": "pingp",
	"email": "ralf@outlook.com",
	"password": "fgfhghh5675gh76",
	"movies": ["banan", "kiwi", "wars"]
}

const expected = {

	"movies": [
		"banan",
		"kiwi",
		"wars"
	],
	"_id": "5ec7a4a9a1794c3de8a22093",
	"firstname": "kallep",
	"lastname": "pingp",
	"email": "ralf@outlook.com",
	"password": "fgfhghh5675gh76",
	"__v": 0

}

describe('User testing', () => {

	it('Should return an array of all Users', (done) => {
		mock
			.expects('find')
			.chain('exec')
			.resolves([expected]);
		agent
			.get('/user')
			.end((err, res) => {
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([expected]);
				done();
			});
	});

	it('Should return an user from id ', (done) => {
		mock
			.expects('findById')
			.withArgs("5cecf112a66bc43a217dfda3")
			.chain('exec')
			.resolves(expected)
		agent
			.get('/user/5cecf112a66bc43a217dfda3')
			.send(request)
			.end((err, res) => {
				expect(res.status).to.equal(200);
				expect(res.body).to.eql(expected);
				done();
			});
	});

	it('Should get a User by email', (done) => {
		mock
			.expects('find')
			.withArgs({
				"email": "ralf@outlook.com"
			})
			.chain('exec')
			.resolves(expected);
		agent
			.get('/user?email=ralf@outlook.com')
			.end((err, res) => {
				expect(res.status).to.equal(200);
				expect(res.body).to.eql(expected);
				done();
			});
	});

	describe('User.post', () => {
		it('Should be able to create a User', (done) => {
			mock
				.expects('create')
				.withArgs(request)
				.chain('exec')
				.resolves(expected);
			agent
				.post('/user')
				.send(request)
				.end((err, res) => {
					expect(res.status).to.equal(201);
					expect(res.body).to.eql(expected);
					done();
				});
		});
	})

	describe('user.put', () => {
		it('Should be able to change a user', (done) => {
			mock
				.expects('updateOne')
				.withArgs({
					_id: "5cecf112a66bc43a217dfda3"
				}, request)
				.chain('exec')
				.resolves({
					n: 1,
					nModified: 0,
					upserted: [{
						index: 0,
						_id: "5cecf112a66bc43a217dfda3"
					}],
					ok: 1
				});
			mock
				.expects('findById')
				.withArgs("5cecf112a66bc43a217dfda3")
				.chain('exec')
				.resolves(expected)
			agent
				.put('/user/5cecf112a66bc43a217dfda3')
				.send(request)
				.end((err, res) => {
					expect(res.status).to.equal(201);
					done();
				});
		});
	});

	describe('User.delete', () => {
		it('Should be able to delete a User', (done) => {
			mock
				.expects('findByIdAndDelete')
				.withArgs('5ec391480c552a3554ab49ba')
				.chain('exec')
				.resolves('200')
			agent
				.delete('/user/5ec391480c552a3554ab49ba')
				.end((err, res) => {
					expect(res.status).to.equal(200);
					done();
				});
		});
	});
});