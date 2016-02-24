import Shape from './Shape';

let perimeter = {
    /**
     * @type {Shape}
     */
    Shape,

    /**
     *
     * @param {HTMLElement} element
     * @param {number} marginSize
     * @returns {Shape}
     */
    bindToElement(element, marginSize){
        return new Shape(element, marginSize);
    }
};

if (!window.perimeter){
    window.perimeter = perimeter;
}

export default perimeter;
