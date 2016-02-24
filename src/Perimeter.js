/**
 * A shape detects if there has been interaction in a certain area
 * on the screen bound to an existing element.
 */
import EventEmitter from './EventEmitter';

class Perimeter extends EventEmitter{
    /**
     *
     * @param {HTMLElement} element
     * @param {number} marginSize
     */
    constructor(element, marginSize) {
        super();

        this._element = element;
        this._marginSize = marginSize;

        // refresh shape metrics
        this._refresh();

        // register to future changes
        window.addEventListener('scroll', this._onWindowScroll.bind(this), false);
        window.addEventListener('resize', this._onWindowResize.bind(this), false);
        window.addEventListener('load', this._onWindowLoad.bind(this), false);

        // detect if mouse is inside virtual area
        document.addEventListener('mousemove', this._onDocumentMouseMove.bind(this), false);
    }

    /**
     * Triggered when document is scrolled
     *
     * @private
     */
    _onWindowScroll(){
        this.markAsDirty();
    }

    /**
     * Triggered when window resizes
     *
     * @private
     */
    _onWindowResize(){
        this.markAsDirty();
    }

    /**
     * Triggered when window load event occurs
     *
     * @private
     */
    _onWindowLoad(){
        this.markAsDirty();
    }

    /**
     * Triggered when mouse moves on the document.
     *
     * Test if movement of mouse is within the perimeter. Triggers events on object
     * when entering, moving or exiting the perimeter.
     *
     * @param {MouseEvent} event
     * @private
     */
    _onDocumentMouseMove(event){
        let {clientX, clientY} = event;

        if (clientX >= this.left && clientX <= this.right && clientY >= this.top && clientY <= this.bottom) {
            let centerX = this.left + ((this.right - this.left) /2);
            let centerY = this.top + ((this.bottom - this.top) /2);

            this.triggerEvent('mousemove', {
                clientX,
                clientY,
                centerX,
                centerY,
                angleFromCenter: Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI,
                distanceFromCenter: Math.sqrt(
                    Math.pow(clientX - centerX,2) +
                    Math.pow(clientY - centerY,2)
                ),
                isInsideElement: clientY >= this.top + this._marginSize && clientY <= this.bottom - this._marginSize
                                && clientX >= this.left + this._marginSize && clientX <= this.right - this._marginSize
            });

            if (this._isInside !== true){
                this._isInside = true;
                this.triggerEvent('mouseenter');
            }
        } else if (this._isInside === true){
            this._isInside = false;
            this.triggerEvent('mouseleave');
        }
    }

    /**
     * Mark the object as dirty. Next time position or size variables
     * are requested the value is automatically recalculated.
     */
    markAsDirty(){
        this._isDirty = true;
    }

    /**
     * Triggers variable refresh if object is marked
     * as dirty.
     *
     * @private
     */
    _checkIfDirty(){
        if (this._isDirty === true){
            this._isDirty = false;
            this._refresh();
        }
    }

    /**
     * Refresh position and sizing variables
     *
     * @private
     */
    _refresh(){
        this._refreshSize();
        this._refreshPosition();
    }

    /**
     * Calculate width and height of object
     *
     * @private
     */
    _refreshSize(){
        var elementWidth = this._element.offsetWidth;
        var elementHeight = this._element.offsetHeight;

        this._width = elementWidth + (2* this._marginSize);
        this._height = elementHeight + (2* this._marginSize);
    }

    /**
     * Calculate position on viewport of object. A virtual margin
     * is added to the element position. This defines the perimiter
     * of the object.
     *
     * @private
     */
    _refreshPosition(){
        var elementPosition = this._element.getBoundingClientRect();

        this._left = elementPosition.left - this._marginSize;
        this._top = elementPosition.top - this._marginSize;
        this._right = this._left + this._width;
        this._bottom = this._top + this._height;
    }

    /**
     *
     * @returns {number}
     */
    get width(){
        this._checkIfDirty();
        return this._width;
    }

    /**
     *
     * @returns {number}
     */
    get height(){
        this._checkIfDirty();
        return this._height;
    }

    /**
     *
     * @returns {number}
     */
    get top(){
        this._checkIfDirty();
        return this._top;
    }

    /**
     *
     * @returns {number}
     */
    get right(){
        this._checkIfDirty();
        return this._right;
    }

    /**
     *
     * @returns {number}
     */
    get bottom(){
        this._checkIfDirty();
        return this._bottom;
    }

    /**
     *
     * @returns {number}
     */
    get left(){
        this._checkIfDirty();
        return this._left;
    }
}


export default Perimeter;
