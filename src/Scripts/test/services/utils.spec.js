describe('service:utils |', function () {

    var utils;

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function(_utils_) {
        utils = _utils_;
    }));

    it('should be defined', function () {
        expect(utils).not.toBeUndefined();
    });

    describe('inherit |', function () {
        var oakTree;

        it('should be defined', function() {
            expect(utils.inherit).not.toBeUndefined();
        });

        it('child Class should have _super and invokeBaseConstructor methods', function () {
            function Tree() { this.age = 0; this.family = 'none'; this.grow = function() { return 'growing'; }; };
            function Oak() { this.callSuperConstructor(this); this.family = 'hardwood'; };
            utils.inherit(Oak, Tree);
            oakTree = new Oak();

            expect(Oak.prototype['_super']).not.toBeUndefined();
            expect(Oak.prototype.callSuperConstructor).not.toBeUndefined();
        });

        it('_super should point to parent Class', function () {
            function Tree() { this.age = 0; this.family = 'none'; this.grow = function() { return 'growing'; }; };
            function Oak() { this.callSuperConstructor(this); this.family = 'hardwood'; };
            utils.inherit(Oak, Tree);
            oakTree = new Oak();

            expect(Oak.prototype['_super'].constructor).toEqual(Tree);
        });

        it('child Class instance should inherit parent Class standard values and methods', function () {
            function Tree() { this.age = 0; this.family = 'none'; this.grow = function () { return 'growing'; }; };
            function Oak() { this.callSuperConstructor(this); this.family = 'hardwood'; };
            utils.inherit(Oak, Tree);
            oakTree = new Oak();

            expect(oakTree.age).not.toBeUndefined();
        });

        it('child Class instance should overwrite parent Class standard values', function () {
            function Tree() { this.age = 0; this.family = 'none'; this.grow = function () { return 'growing'; }; };
            function Oak() { this.callSuperConstructor(this); this.family = 'hardwood'; };
            utils.inherit(Oak, Tree);
            oakTree = new Oak();

            expect(oakTree.family).toEqual('hardwood');
        });
    });

});