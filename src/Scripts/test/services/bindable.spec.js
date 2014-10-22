describe('service:base.bind |', function () {

    var Bindable,
        mockChildService,
        called;


    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function (_Bindable_) {
        Bindable = _Bindable_;
    }));
    beforeEach(function () {
        var bindable = new Bindable();
        called = {
            onAttach: 0,
            onDetach: 0,
            onBound: 0,
            onUnBound: 0
        };
        bindable.onAttach = function () { called.onAttach++; };
        bindable.onBound = function () { called.onBound++; };
        bindable.onUnBound = function () { called.onUnBound++; };
        bindable.onDetach = function () { called.onDetach++; };

        mockChildService = _.assign(function () { }, bindable);
    });

    it('should be defined', function () {
        expect(Bindable).not.toBeUndefined();
    });

    describe('child service | ', function () {
        it('should be defined', function () {
            expect(mockChildService).not.toBeUndefined();
        });

        it('should inherit Bindable props and methods', function () {
            expect(mockChildService.bind).not.toBeUndefined();
            expect(mockChildService['_callbacks']).not.toBeUndefined();
            expect(mockChildService.invoke).not.toBeUndefined();
        });

        it('should be able to override Bindable methods', function () {
            mockChildService.onAttach();
            expect(called.onAttach).toEqual(1);
        });
    });

    describe('bind |', function () {
        it('should return an unbind function', function () {
            var unbind = mockChildService.bind(function () { });
            expect(unbind).not.toBeUndefined();
            expect(_.isFunction(unbind)).toEqual(true);
        });

        it('should add callback when called', function () {
            expect(mockChildService['_callbacks'].length).toEqual(0);
            mockChildService.bind(function () { });
            expect(mockChildService['_callbacks'].length).toEqual(1);
        });

        it('should call onAttach when called first time', function () {
            mockChildService.bind(function () { });
            expect(called.onAttach).toEqual(1);
        });
    });

    describe('unbind |', function () {
        var unbind;
        beforeEach(function() {
            unbind = mockChildService.bind(function () { });
        });

        it('should remove callback when called', function () {
            expect(mockChildService['_callbacks'].length).toEqual(1);
            unbind();
            expect(mockChildService['_callbacks'].length).toEqual(0);
        });

        it('should call onUnBound when called', function () {
            unbind();
            expect(called.onUnBound).toEqual(1);
        });

        it('should call onDetach when called with 1 item in callbacks', function () {
            unbind();
            expect(called.onDetach).toEqual(1);
        });
    });

    describe('invoke |', function () {
        var invokeCount, unbind;
        beforeEach(function () {
            invokeCount = 0;
            unbind = mockChildService.bind(function () { invokeCount++; });
        });

        it('should do nothing if no callbacks are bound', function () {
            unbind();
            mockChildService.invoke();
            expect(invokeCount).toEqual(0);
        });

        it('should invoke bound callback when called', function () {
            mockChildService.invoke();
            expect(invokeCount).toEqual(1);
        });

        it('should be invoked with arguments when passed', function () {
            var args = [1, 2, 3, 4, 'test'];
            var calledArgs;
            mockChildService.bind(function () { calledArgs = arguments; });
            mockChildService.invoke(1, 2, 3, 4, 'test');
            expect(calledArgs[0]).toEqual(args[0]);
            expect(calledArgs[4]).toEqual(args[4]);
        });

        it('should handle multiple invokes', function () {
            var noOfCalls = 10;
            for (var i = 0; i < noOfCalls; i++) {
                mockChildService.invoke();
            }
            
            expect(invokeCount).toEqual(noOfCalls);
        });
    });
});