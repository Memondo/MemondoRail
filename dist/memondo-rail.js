"use strict";
exports.__esModule = true;
var MemondoRail = /** @class */ (function () {
    function MemondoRail() {
    }
    /**
     * Given an HTMLElement this function will return an IntersectionObserver instance
     * The intersection observer API see 'https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe'
     *
     *
     * @param ref The HTMLElement which will be intersected
     * @param callback Function to trigger when the element is being intersected, it returns data
     * such current position, element, times, deltas etc, see API for more info
     * @param options Options to configure the IntersectionObserver instance see API for more info
     */
    MemondoRail.prototype.setObserver = function (ref, callback, options) {
        var opt = options || {
            root: null,
            rootMargin: '0px',
            threshold: 0
        };
        var observer = new IntersectionObserver(callback, opt);
        return observer;
    };
    /**
     * Discconnect an obersver, call this method when you dont need the element
     * to be observed anymore
     * @param observer Observer to be destroyed
     */
    MemondoRail.prototype.destroyObserver = function (observer) {
        observer.disconnect();
    };
    return MemondoRail;
}());
exports.MemondoRail = MemondoRail;
