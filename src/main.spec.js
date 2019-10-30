import { expect } from 'chai';
import calc from './main';

describe('Calc', () => {

    //init with smoke tests    
    describe('Smoke test', () => {

        it('should exits the `calc` lib', () => {
            expect(calc).to.exist;
        });

        it('should exits the `sum` method', () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exits the `sub` method', () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exits the `mult` method', () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exits the `div` method', () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });

    });

    //check methods
    describe('Sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(calc.sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(6,2)`', () => {
            expect(calc.sub(6, 2)).to.be.equal(4);
        });
        it('should return -4 when `sub(6,10)`', () => {
            expect(calc.sub(6, 10)).to.be.equal(-4);
        });
    });

    describe('Mult', () => {
        it('should return 4 when `mult(2,2)`', () => {
            expect(calc.mult(2, 2)).to.be.equal(4);
        });
    });

    describe('Div', () => {
        it('should return `not divided by zero` when divide by zero', () => {
            expect(calc.div(4, 0)).to.be.equal('not divided by zero');
        });
    });
});