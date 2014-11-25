describe('service:svg.parts |', function () {

    var SvgParts;

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function(_SvgParts_) {
        SvgParts = _SvgParts_;
    }));

    it('should be defined', function () {
        expect(SvgParts).not.toBeUndefined();
    });

    describe('addSvgClass (add) |', function () {
        it('should be defined', function () {
            expect(SvgParts.add).not.toBeUndefined();
        });

        it('should return null when called without type', function () {
            expect(SvgParts.add('testkey', {})).toEqual(null);
            expect(SvgParts.add('testkey', { type: null })).toEqual(null);
        });

        it('should return null when called without data', function () {
            expect(SvgParts.add('testkey', { type: 'Path', data: null })).toEqual(null);
            expect(SvgParts.add('testkey', { type: 'Path' })).toEqual(null);
        });

        it('should return null when called with nonexisting type', function () {
            expect(SvgParts.add('testkey', { type: 'nonexistingtype', data: null })).toEqual(null);
            expect(SvgParts.add('testkey', { type: 'nonexistingtype' })).toEqual(null);
        });
    });

    describe('updateOne |', function () {
        it('should be defined', function () {
            expect(SvgParts.updateOne).not.toBeUndefined();
        });

        it('should update part', function () {
            SvgParts.add('base', { type: 'Path', data: 'somedata', newProp: 'new data' });
            var updatedPart = SvgParts.updateOne('base', { data: 'someotherdata' });
            expect(updatedPart.type).toEqual('Path');
            expect(updatedPart.data).toEqual('someotherdata');
            expect(updatedPart.newProp).toEqual('new data');
        });
    });

    describe('model instance', function () {
        var modelInstance;

        beforeEach(function () {
            SvgParts.add('test', { type: 'Path', data: 'somedata', color: '#ffffff' });
            modelInstance = SvgParts.getOne('test');
        });

        it('should be defined', function () {
            expect(modelInstance).not.toBeUndefined();
        });

        it('should have model data', function () {
            expect(modelInstance.data).not.toBeUndefined();
            expect(modelInstance.key).not.toBeUndefined();
            expect(modelInstance.color).not.toBeUndefined();
        });
    });
});