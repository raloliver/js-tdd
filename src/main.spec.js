var expect = require('chai').expect;

describe('Main', function () {
    //para utilização do hook, é ideal iniciar a variavel fora do hook e atribuir um valor a ela dentro do hook
    var arr;
    //hooks
    //before: uma única vez antes do bloco
    //after: uma vez depois do bloco
    //beforeEach: uma vez antes de cada bloco
    //afterEach: uma vez antes de cada bloco

    before(function () { }); //tear up //criar mock de dados
    after(function () { }); //tear down //apagar mock de dados
    beforeEach(function () { arr = [1, 2, 3, 4]; });
    afterEach(function () { });

    //test type or if is not undefined (smoke test)
    it('should be an array', function () {
        expect(arr).to.be.a('array');
    });

    //caso isole uma variável fora do escopo, vc acaba por depender dos testes anteriores para que os próximos sejam executados
    // var arr = [1, 2, 3, 4];

    it('should have a size of 5 when push another value to the array', function () {
        arr.push(5);
        //expect() in use
        expect(arr).to.have.lengthOf(5);
    });
    it('should have a size of 3 when pop a value from the array', function () {
        arr.pop();
    });
    it('should remove the value 4 when use pop in the array', function () {
        console.log(arr.pop() === 4);
        //expect() in use
        expect(arr).to.not.include(4); //include or contain
    });
    it('should return true when pop 3 from the', function () {
        expect(arr.pop() === 4 ).to.be.true;
    });
    it('should have a size of 3 when pop a value from the array', function () {
        arr.pop();
        expect(arr).to.have.lengthOf(3);
    });
});