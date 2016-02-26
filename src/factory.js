import Perimeter from './Perimeter';

let factory = {
    /**
     * @type {Perimeter}
     */
    Perimeter,

    /**
     * setup a perimeter
     *
     * @param {HTMLElement} element
     * @param {number} marginSize
     * @returns {Shape}
     */
    setup(element, marginSize){
        return new Perimeter(element, marginSize);
    }
};

export default factory;
