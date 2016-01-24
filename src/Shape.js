/**
 * A shape detects if there has been interaction in a certain area
 * on the screen bound to an existing element.
 */
import EventEmitter from './EventEmitter';

class PerimeterShape extends EventEmitter{
    constructor(element, marginSize) {
        super();

        this._element = element;
        this._marginSize = marginSize;

        // refresh shape metrics
        this.refresh();

        // register to future changes
        window.addEventListener('scroll', this._onWindowScroll.bind(this), false);
        window.addEventListener('resize', this._onWindowResize.bind(this), false);
        window.addEventListener('load', this._onWindowLoad.bind(this), false);

        // detect if mouse is inside virtual area
        document.addEventListener('mousemove', this._onDocumentMouseMove.bind(this), false);
    }

    _onWindowScroll(){
        this.markAsDirty();
    }

    _onWindowResize(){
        this.markAsDirty();
    }

    _onWindowLoad(){
        this.markAsDirty();
    }

    markAsDirty(){
        this._isDirty = true;
    }

    _onDocumentMouseMove(event){
        let {clientX, clientY} = event;

        this._clientX = event.clientX;
        this._clientY = event.clientY;

        if (clientX >= this.left && clientX <= this.right && clientY >= this.top && clientY <= this.bottom) {
            this.triggerEvent('mousemove', {
                clientX,
                clientY
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

    _checkIfDirty(){
        if (this._isDirty === true){
            this._isDirty = false;
            this.refresh();
        }
    }

    refresh(){
        this.refreshSize();
        this.refreshPosition();
    }

    refreshSize(){
        var elementWidth = this._element.offsetWidth;
        var elementHeight = this._element.offsetHeight;

        this._width = elementWidth + (2* this._marginSize);
        this._height = elementHeight + (2* this._marginSize);
    }

    refreshPosition(){
        var elementPosition = this._element.getBoundingClientRect();

        this._left = elementPosition.left - this._marginSize;
        this._top = elementPosition.top - this._marginSize;
        this._right = this._left + this._width;
        this._bottom = this._top + this._height;
    }

    get width(){
        this._checkIfDirty();
        return this._width;
    }

    get height(){
        this._checkIfDirty();
        return this._height;
    }

    get top(){
        this._checkIfDirty();
        return this._top;
    }

    get right(){
        this._checkIfDirty();
        return this._right;
    }

    get bottom(){
        this._checkIfDirty();
        return this._bottom;
    }

    get left(){
        this._checkIfDirty();
        return this._left;
    }
}


export default PerimeterShape;
