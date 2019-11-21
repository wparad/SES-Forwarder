'use strict;'
var esprima = require('esprima');
var mocha = require('mocha');
var assert = require('chai').assert;
var fs = require('fs');
var path = require('path');

describe('src/index.js', function() {
	describe('Syntax', function () {
		it('Should be valid node', function(){
			try {
				var app = require('../src/index');
				assert(true);
			}
			catch(e) {
				console.log(e.stack);
				assert(false, e.toString());
			}
		});
	});
	describe('Non-RESTful Test', function () {
		/*
		it('GET', function(done) {
			try {
				var lambda = require('../src/index');
				new Promise((s, f) => {
					lambda({}, {}, (failure, success) => {
						if(success && !failure) { return s(success); }
						else { f(failure); }
					});
				})
				.then(output => {
					done();
				})
				.catch(failure => done(failure));
			}
			catch(e) {
				console.error(e.stack);
				assert(false, e.toString());
			}
		});
		*/
	});
});