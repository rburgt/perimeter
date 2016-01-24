import Shape from './Shape';

let perimeter = {
    /**
     * @type {Shape}
     */
    Shape,

    /**
     *
     * @param element
     * @param marginSize
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
