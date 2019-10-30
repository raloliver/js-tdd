import { expect } from 'chai';
import { sum, sub, mult, div } from './main';

describe('Calc', () => {

    //init with smoke tests    
    describe('Smoke test', () => {

        it('should exits the `sum` method', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exits the `sub` method', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('should exits the `mult` method', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exits the `div` method', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });

    });

    //check methods
    describe('Sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(6,2)`', () => {
            expect(sub(6, 2)).to.be.equal(4);
        });
        it('should return -4 when `sub(6,10)`', () => {
            expect(sub(6, 10)).to.be.equal(-4);
        });
    });

    describe('Mult', () => {
        it('should return 4 when `mult(2,2)`', () => {
            expect(mult(2, 2)).to.be.equal(4);
        });
    });

    describe('Div', () => {
        it('should return `not divided by zero` when divide by zero', () => {
            expect(div(4, 0)).to.be.equal('not divided by zero');
        });
    });
});