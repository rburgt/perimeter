import Shape from './Shape';

let perimeter = {
    /**
     * @type {Shape}
     */
    Shape,

    /**
     * setup a perimeter
     *
     * @param {HTMLElement} element
     * @param {number} marginSize
     * @returns {Shape}
     */
    setup(element, marginSize){
        return new Shape(element, marginSize);
    }
};

if (!window.perimeter){
    window.perimeter = perimeter;
}

export default perimeter;
