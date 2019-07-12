export class MemondoRail {
    constructor() {
    }

    public setObserver(ref, callback, options?): IntersectionObserver {

        const opt = options || {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }

        let observer = new IntersectionObserver(callback, opt)

        return observer
    }


    public destroyObserver(observer: IntersectionObserver) {
        observer.disconnect();
    }
}




