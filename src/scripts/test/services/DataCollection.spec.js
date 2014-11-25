describe('service:base:DataCollection |', function () {

    var DataCollection, dataCollectionSync, dataCollectionASync;

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function(_DataCollection_) {
        DataCollection = _DataCollection_;
    }));

    it('should be defined', function () {
        expect(DataCollection).not.toBeUndefined();
        dataCollectionSync = new DataCollection({ items: {}, isAsync: false });
        dataCollectionASync = new DataCollection({ filePath: 'some/path/with.extension', isAsync: true });
    });

    describe('constructor |', function() {
        it('should handle empty arguments', function () {
            var dataCollection = new DataCollection();
            expect(dataCollection.items).not.toBeUndefined();
            expect(dataCollection.isAsync).not.toBeUndefined();
        });
    });

    describe('add |', function () {
        it('should be defined', function () {
            expect(dataCollectionSync.add).not.toBeUndefined();
        });

        it('should return null when called without key', function () {
            expect(dataCollectionSync.add()).toEqual(null);
            expect(dataCollectionSync.add(null, {})).toEqual(null);
        });

        it('should return the updated collection when adding', function () {
            dataCollectionSync.add('base', { type: 'Path', data: 'somedata' });
            var updatedCollection = dataCollectionSync.add('test', { type: 'Path', data: 'somedata' });
            expect(updatedCollection['base']).not.toBeUndefined();
        });
    });

    describe('addAll |', function() {
        it('should be defined', function () {
            expect(dataCollectionSync.addAll).not.toBeUndefined();
        });
    });

    describe('getOne |', function () {
        beforeEach(function() {
            dataCollectionSync.add('base', { type: 'Path', data: 'somedata', newProp: 'new data' });
        });

        it('should be defined', function() {
            expect(dataCollectionSync.getOne).not.toBeUndefined();
        });

        it('should return a part when called with valid existing', function () {
            expect(dataCollectionSync.getOne('base')).not.toBeUndefined();
        });

        it('should return null when called with nonexisting key', function () {
            expect(dataCollectionSync.getOne('nonexistingkey')).toEqual(null);
        });
    });

    describe('getAll |', function () {
        beforeEach(function () {
            dataCollectionSync.add('base', { type: 'Path', data: 'somedata', newProp: 'new data' });
        });

        it('should be defined', function () {
            expect(dataCollectionSync.getAll).not.toBeUndefined();
        });

        it('should return parts when called', function () {
            expect(dataCollectionSync.getAll()['base']).not.toBeUndefined();
        });
    });


    describe('updateOne |', function () {
        beforeEach(function () {
            dataCollectionSync.add('base', { type: 'Path', data: 'somedata'});
        });

        it('should be defined', function () {
            expect(dataCollectionSync.updateOne).not.toBeUndefined();
        });

        it('should update part', function() {
            var updatedPart = dataCollectionSync.updateOne('base', { data: 'someotherdata' });
            expect(updatedPart.type).toEqual('Path');
            expect(updatedPart.data).toEqual('someotherdata');
        });
    });

    describe('updateAll |', function () {
        beforeEach(function () {
            dataCollectionSync.add('base', { type: 'Path', data: 'somedata', newProp: 'new data' });
            dataCollectionSync.add('base2', { type: 'Path', data: 'somedata', newProp: 'new data' });
        });
        it('should be defined', function () {
            expect(dataCollectionSync.updateAll).not.toBeUndefined();
        });

        it('should update parts collection', function () {
            var updatedCollection = dataCollectionSync.updateAll();
            expect(updatedCollection['base'].type).toEqual('Path');
            expect(updatedCollection['base2'].type).toEqual('Path');
        });
    });
});