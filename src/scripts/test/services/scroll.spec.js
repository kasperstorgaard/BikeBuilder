describe('service:scroll |', function () {

    var scroll,
        called,
        mockScrollEvent;

    beforeEach(module('bikeBuilder'));
    beforeEach(inject(function(_scroll_) {
        scroll = _scroll_;

        called = {
            invoke: 0
        }

        mockScrollEvent = new Event('scroll', {});

        scroll.invoke = function() {
            called.invoke++;
        }
    }));

    it('should be defined', function () {
        expect(scroll).not.toBeUndefined();
    });

    describe('attachScroll (onAttach) |', function () {
        it('should be defined', function () {
            expect(scroll.onAttach).not.toBeUndefined();
        });

        it('shouldnt call invoke on scroll when not attached', function () {
            window.dispatchEvent(mockScrollEvent);
            expect(called.invoke).toBe(0);
        });

        it('should call invoke on scroll when attached', function () {
            scroll.onAttach();
            window.dispatchEvent(mockScrollEvent);
            expect(called.invoke).toBe(1);
        });
    });

    describe('detachScroll (onDetach) |', function () {
        it('should be defined', function () {
            expect(scroll.onDetach).not.toBeUndefined();
        });

        it('shouldnt call invoke on scroll when detached', function () {
            scroll.onAttach();
            window.dispatchEvent(mockScrollEvent);
            scroll.onDetach();
            window.dispatchEvent(mockScrollEvent);
            expect(called.invoke).toBe(1);
        });
    });

    describe('getScrollTop |', function () {
        it('should be defined', function () {
            expect(scroll.getScrollTop).not.toBeUndefined();
        });
    });

    describe('handleScroll |', function () {
        it('should be defined', function () {
            expect(scroll.handleScroll).not.toBeUndefined();
        });

        it('should call "invoke"', function() {
            scroll.handleScroll();
            expect(called.invoke).toEqual(1);
        });
    });
});