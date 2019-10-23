var expect = require('chai').expect;
var calc = require('../src/main');

describe('Calc', function () {

    //init with smoke tests
    //check methods
    describe('Smoke test', function () {

        it('should exits the `calc` lib', function () {
            expect(calc).to.exist;
        });

        it('should exits the `sum` method', function () {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exits the `sub` method', function () {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exits the `mult` method', function () {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exits the `div` method', function () {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });

    });

    //
    describe('Sum', function () {
        it('should return 4 when `sum(2,2)`', function () {
            expect(calc.sum(2, 2)).to.be.equal(4);
        });
    });
});