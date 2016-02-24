import Perimeter from './Perimeter';

let perimeter = {
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

if (!window.perimeter){
    window.perimeter = perimeter;
}

export default perimeter;
