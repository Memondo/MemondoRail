"use strict";
//import { Observable, BehaviorSubject } from 'rxjs';
exports.__esModule = true;
var MemondoRail = /** @class */ (function () {
    function MemondoRail() {
        this.previousY = 0;
    }
    /**
     * Sets an intersection Observer for the reference passed
     * @param ref - A reference of type ElementRef of the object to be intersected
     * @param {boolean} [unobserve=true] - A value which sets if the element should be unobserved after being intersected for the first time
     * @param {number} [treshold=1] - The percentage of pixels which must be on screen to trigger the intersection
     * @returns {Observable<ObserverData>} - An ObserverData observable
     */
    MemondoRail.prototype.setObserver = function (ref, threshold) {
        var _this = this;
        if (threshold === void 0) { threshold = 0; }
        return new Promise(function (resolve, reject) {
            var opt = {
                root: null,
                rootMargin: '0px',
                threshold: threshold
            };
            var previousY = 0;
            try {
                var observer = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        var currentY = entry.boundingClientRect.y;
                        if (!entry.target.itWasInView) {
                            if (entry.isIntersecting) {
                                var lazyEl = entry.target;
                                lazyEl.itWasInView = true;
                                resolve({ direction: _this.getDirection(previousY, currentY), inView: true });
                            }
                            else {
                                resolve({ direction: _this.getDirection(previousY, currentY), inView: false });
                            }
                        }
                        previousY = currentY;
                    });
                }, opt);
            }
            catch (e) {
                console.error(e);
                reject();
            }
        });
    };
    MemondoRail.prototype.getDirection = function (pre, current) {
        var direction = 'down';
        if (current > pre) {
            direction = 'up';
        }
        return direction;
    };
    return MemondoRail;
}());
exports.MemondoRail = MemondoRail;
