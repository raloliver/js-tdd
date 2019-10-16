describe('Main', function () {
    describe('Method 0', function () {
        context('Case A', function () {
            it('should happen on Case A in Method 0)', function() {
                //waint to happens
                //input (method)
                //output (return)
                throw new Error('Ops... ERROR!');
            });
        });
        context('Case B', function () {
            it.skip('should happen on Case B in Method 0 [0])', function() {});
            it('should happen on Case B in Method 0 [1])', function() {});
        });
    });
    describe('Method 1', function () {
        // context.only('Case A', function () {});
        context('Case B', function () {});
    });
});  