const assert = require('chai').assert;
/*const app = require('../app');*/

const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
/*
describe('App', function () {
	it('app should return hello', function () {
		assert.equal(app(), 'hello');
	});
});*/


describe('App', function () {


	beforeEach('executes BEFORE EACH "it" statement in the describe block', function() {
  			console.log('executes BEFORE EACH "it" statement in the describe block');
	});

	before('executes BEFORE ALL "it" statement in the describe block', function() {
  			console.log('executes BEFORE ALL "it" statement in the describe block');
	});

	afterEach('executes AFTER EACH "it" statement in the describe block', function() {
  			console.log('executes AFTER EACH "it" statement in the describe block');
	});

	after('executes AFTER ALL "it" statement in the describe block', function() {
  			console.log('executes AFTER ALL "it" statement in the describe block');
	});


	it('app should return hello', function () {
		let result = sayHello();

		assert.equal(result, 'hello');
	});


	it('sayHello should return type string', function () {
		let result = sayHello();
		assert.typeOf(result, 'string');

	});

	it('addNumbers should be above 5', function () {
		let result = addNumbers(5,5);
		assert.isAbove(result, 5);

	});


	it('addNumbers should return type number', function () {
		let result = addNumbers(5,5);
		assert.typeOf(result, 'number');

	});


	setTimeout(function() {
  // do some setup

  	describe('my suite', function() {
    	console.log('delayed output');
  	});

  	run();
	}, 5000);


});