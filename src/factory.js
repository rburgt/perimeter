import Perimeter from './Perimeter';

let perimeters = [];

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
        let perimeter = new Perimeter(element, marginSize);

        if (this.debug === true){
            perimeter.debug = true;
        }

        perimeters.push(perimeter);

        return perimeter;
    },

    /**
     * Is factory and all perimeters bound to factory in debug mode?
     *
     * @returns {boolean}
     */
    get debug(){
        return this._debug === true;
    },

    /**
     * Set all perimeters created with factory in debug mode or disable debug mode.
     *
     * @param {boolean} debug
     */
    set debug(debug){
        debug = debug === true;

        if (debug !== this.debug){
            this._debug = debug;

            perimeters.forEach((perimeter) => {
                perimeter.debug = debug;
            });
        }
    }
};

export default factory;
