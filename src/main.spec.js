describe('Main', function () {
    //hooks
    //before: uma única vez antes do bloco
    //after: uma vez depois do bloco
    //beforeEach: uma vez antes de cada bloco
    //afterEach: uma vez antes de cada bloco

    before(function () { console.log('before'); });
    after(function () { console.log('after'); });
    beforeEach(function () { console.log('beforeEach'); });
    afterEach(function () { console.log('afterEach'); });

    it('task 0', function () { console.log('task 0'); });
    it('task 1', function () { console.log('task 1'); });

    /*
    describe('Method 0', function () {
        context('Case A', function () {
            it('should happen on Case A in Method 0)', function () {
                //waint to happens
                //input (method)
                //output (return)
                throw new Error('Ops... ERROR!');
            });
        });
        context('Case B', function () {
            it.skip('should happen on Case B in Method 0 [0])', function () { });
            it('should happen on Case B in Method 0 [1])', function () { });
        });
    });
    describe('Method 1', function () {
        // context.only('Case A', function () {});
        context('Case B', function () { });
    });
    */
});  