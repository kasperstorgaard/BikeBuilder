describe('service:svg.parts |', function () {

    var SvgParts;

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function(_SvgParts_) {
        SvgParts = _SvgParts_;
    }));

    it('should be defined', function () {
        expect(SvgParts).not.toBeUndefined();
    });

    describe('add |', function () {
        it('should be defined', function () {
            expect(SvgParts.add).not.toBeUndefined();
        });

        it('should return null when called without key', function () {
            expect(SvgParts.add()).toEqual(null);
            expect(SvgParts.add(null, {})).toEqual(null);
        });

        it('should return null when called without type', function () {
            expect(SvgParts.add('testkey', {})).toEqual(null);
            expect(SvgParts.add('testkey', {type: null})).toEqual(null);
        });

        it('should return null when called without data', function () {
            expect(SvgParts.add('testkey', { type: 'Path', data: null })).toEqual(null);
            expect(SvgParts.add('testkey', { type: 'Path' })).toEqual(null);
        });

        it('should return null when called with nonexisting type', function () {
            expect(SvgParts.add('testkey', { type: 'nonexistingtype', data: null })).toEqual(null);
            expect(SvgParts.add('testkey', { type: 'nonexistingtype' })).toEqual(null);
        });

        it('should return the updated collection when adding', function () {
            SvgParts.add('base', { type: 'Path', data: 'somedata' });
            var updatedCollection = SvgParts.add('test', { type: 'Path', data: 'somedata' });
            expect(updatedCollection['base']).not.toBeUndefined();
        });
    });

    describe('getOne |', function () {
        beforeEach(function() {
            SvgParts.add('base', { type: 'Path', data: 'somedata', newProp: 'new data' });
        });

        it('should be defined', function() {
            expect(SvgParts.getOne).not.toBeUndefined();
        });

        it('should return a part when called with valid existing', function () {
            expect(SvgParts.getOne('base')).not.toBeUndefined();
        });

        it('should return null when called with nonexisting key', function () {
            expect(SvgParts.getOne('nonexistingkey')).toEqual(null);
        });
    });

    describe('getAll |', function () {
        beforeEach(function () {
            SvgParts.add('base', { type: 'Path', data: 'somedata', newProp: 'new data' });
        });

        it('should be defined', function () {
            expect(SvgParts.getAll).not.toBeUndefined();
        });

        it('should return parts when called', function () {
            expect(SvgParts.getAll()['base']).not.toBeUndefined();
        });
    });


    describe('updateOne |', function () {
        it('should be defined', function () {
            expect(SvgParts.updateOne).not.toBeUndefined();
        });

        it('should  updated part', function() {
            SvgParts.add('base', { type: 'Path', data: 'somedata', newProp: 'new data' });
            var updatedPart = SvgParts.updateOne('base', { data: 'someotherdata' });
            expect(updatedPart.type).toEqual('Path');
            expect(updatedPart.data).toEqual('someotherdata');
            expect(updatedPart.newProp).toEqual('new data');
        });
    });

    describe('updateAll |', function () {
        beforeEach(function () {
            SvgParts.add('base', { type: 'Path', data: 'somedata', newProp: 'new data' });
            SvgParts.add('base2', { type: 'Path', data: 'somedata', newProp: 'new data' });
        });
        it('should be defined', function () {
            expect(SvgParts.updateAll).not.toBeUndefined();
        });

        it('should update parts collection', function () {
            var updatedCollection = SvgParts.updateAll();
            expect(updatedCollection['base'].type).toEqual('Path');
            expect(updatedCollection['base2'].type).toEqual('Path');
        });
    });

    describe('model instance', function () {
        var modelInstance;

        beforeEach(function () {
            SvgParts.add('test', { type: 'Path', data: 'somedata' });
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