describe('service:parts |', function () {

    var Parts;

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function (_Parts_) {
        Parts = _Parts_;
    }));

    it('should be defined', function () {
        expect(Parts).not.toBeUndefined();
    });

    describe('updateSelectedPart | ', function () {
        it('should be defined', function () {
            expect(Parts.updateSelectedPart).not.toBeUndefined();
        });

        it('should return null when called with a falsy section or part parameter', function () {
            expect(Parts.updateSelectedPart()).toEqual(null);
            expect(Parts.updateSelectedPart(null)).toEqual(null);
            expect(Parts.updateSelectedPart("whatever value", null)).toEqual(null);
            expect(Parts.updateSelectedPart(null, "whatever value")).toEqual(null);
        });

        it('should return null when called with a section not in the items', function () {
            Parts.fetched = true;
            Parts.items = { "existingSection": {} };
            expect(Parts.updateSelectedPart("nonexistingsection", {})).toEqual(null);
        });

        it('should return updated collection with item selected when called with valid section and part', function () {
            Parts.fetched = true;
            Parts.items = { "existingSection": { "parts": [{ "name": "item1", "selected": false }, { "name": "item2", "selected": false }] } };
            var expectedItems = { "existingSection": { "parts": [{ "name": "item1", "selected": false }, { "name": "item2", "selected": true }] } };
            expect(Parts.updateSelectedPart("existingSection", { "name": "item2" })).toEqual(expectedItems);
        });
    });
});