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


	"ISBN": "978-0-321-87758-1",
	"Title": "Essential C#5.0",
	"Author": "Mark Michaelis",
	"Price": 59.99,
	"SellerEmail": "someone@someplace.com",
	"Used": true,
	"Location": {
		"City": "Redmond",
		"Street": "156TH AVE NE"
	}



}

const expected = {

	"_id": "5ec396cd1fe6cf05397ea8fa",
	"ISBN": "978-0-321-87758-1",
	"Title": "Essential C#5.0",
	"Author": "Mark Michaelis",
	"Price": 59.99,
	"SellerEmail": "someone@someplace.com",
	"Used": true,
	"Location": {
		"City": "Redmond",
		"Street": "156TH AVE NE"
	},
	"__V": 0,

}

describe('Users.get', () => {

	it('Should return an array of all Users', (done) => {

		// Given (preconditions)
		mock
			.expects('find')
			.chain('exec')
			.resolves([expected]);

		// When (someting happens)
		agent
			.get('/Users')
			.end((err, res) => {
				// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([expected]);
				done();
			});
	});



	// it('Should get a User by title', (done) => {

	// 	// Given (preconditions)
	// 	mock
	// 		.expects('findOne')
	// 		.withArgs({ "Title": "ring" })
	// 		.chain('exec')
	// 		.resolves([expected]);

	// 	// When (someting happens)
	// 	agent
	// 		.get('/Users?Title=ring')
	// 		.end((err, res) => {
	// 			// Then (something should happen)
	// 			expect(res.status).to.equal(200);
	// 			expect(res.body).to.eql([expected]);
	// 			done();
	// 		});
	// });


	describe('Users.post', () => {
		it('Should be able to create a User', (done) => {
			// Given (preconditions)
			mock
				.expects('create')
				.withArgs(request)
				.chain('exec')
				.resolves(expected);

			// When (someting happens)
			agent
				.post('/Users')
				.send(request)
				.end((err, res) => {
					// Then (something should happen)
					expect(res.status).to.equal(201);
					expect(res.body).to.eql(expected);
					done();
				});
		});
	})

	// describe('User.delete', ()  => { 
	// 	it('Should be able to delete a User', (done) => {
	// 		// Given (preconditions)
	// 		mock
	// 		.expects('findByIdAndDelete')
	// 		.withArgs('5ec391480c552a3554ab49ba')
	// 		.chain('exec')
	// 		.resolves('200')

	// 		// When (someting happens)
	// 		agent
	// 		.delete('/Users/5ec391480c552a3554ab49ba')
	// 		.end((err,res) => {
	// 		// Then (something should happen)
	// 			expect(res.status).to.equal(200);
	// 			done();
	// 		});
	// 	});
	// });
});



