/**
 * Basic event emitter.
 */
class EventEmitter {
    /**
     *
     * @returns {{}|*}
     */
    get eventHandlers(){
        if (!this._eventHandlers){
            this._eventHandlers = {};
        }
        return this._eventHandlers;
    }

    /**
     *
     * @param eventName
     * @param handlerFn
     */
    addEventListener(eventName, handlerFn){
        this.eventHandlers[eventName] = this.eventHandlers[eventName] || [];
        this.eventHandlers[eventName].push(handlerFn);
    }

    /**
     *
     * @param eventName
     * @param handlerFn
     */
    removeEventListener(eventName, handlerFn){
        let handlerFnIndex = (this.eventHandlers[eventName] || []).indexOf(handlerFn);

        if (handlerFnIndex > -1){
            this.eventHandlers[eventName].splice(handlerFnIndex, 1);
        }
    }

    /**
     *
     * @param eventName
     * @param eventData
     */
    triggerEvent(eventName, ...eventData){
        (this.eventHandlers[eventName] || []).forEach((handlerFn) => {
            handlerFn.apply(this, eventData);
        });
    }
}

export default EventEmitter;
