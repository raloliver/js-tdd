describe('Main', function () {
    //hooks
    //before: uma única vez antes do bloco
    //after: uma vez depois do bloco
    //beforeEach: uma vez antes de cada bloco
    //afterEach: uma vez antes de cada bloco

    before(function () { });
    after(function () { });
    beforeEach(function () { });
    afterEach(function () { });

    it('should have a size of 5 when push another value to the array', function () {
        var arr = [1, 2, 3, 4];
        arr.push(5);
        console.log(arr.length);
    });
    it('should have a size of 3 when pop a value from the array', function () {
        var arr = [1, 2, 3, 4];
        arr.pop();
        console.log(arr.length);
    });
    it('should remove the value 4 when use pop in the array', function () {
        var arr = [1, 2, 3, 4];
        console.log(arr.pop() === 4);
    });

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