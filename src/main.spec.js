var expect = require('chai').expect;
var calc = require('../src/main');

describe('Calc', function () {

    //init with smoke tests    
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

    //check methods
    describe('Sum', function () {
        it('should return 4 when `sum(2,2)`', function () {
            expect(calc.sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub', function () {
        it('should return 4 when `sub(6,2)`', function () {
            expect(calc.sub(6, 2)).to.be.equal(4);
        });
        it('should return -4 when `sub(6,10)`', function () {
            expect(calc.sub(6, 10)).to.be.equal(-4);
        });
    });

    describe('Mult', function () {
        it('should return 4 when `mult(2,2)`', function () {
            expect(calc.mult(2, 2)).to.be.equal(4);
        });
    });

    describe('Div', function () {
        it('should return `not divided by zero` when divide by zero', function () {
            expect(calc.div(4, 0)).to.be.equal('not divided by zero');
        });
    });
});