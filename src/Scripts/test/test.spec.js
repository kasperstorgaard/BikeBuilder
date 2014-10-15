describe('module |', function () {
    beforeEach(module('bikeBuilder'));

    it('should have a version', inject(function (version) {
        expect(version).toEqual('0.1');
    }));
});