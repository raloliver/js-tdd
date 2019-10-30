/*
    FizzBuzz
    Escreva uma função que receba um número e:
    Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
    Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
    Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
    Se não for múltiplo de nada, retorna o número
 */

import { expect } from 'chai';

describe('Main', () => {
    it('should return `Fizz` when multiple by 3', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz');
    });
});