import factory from './factory';

/**
 * Expose factory as a AMD module or expose globally.
 *
 * Exposing as a commonJS module does not make any sense, this
 * should be done by requirering the factory directly.
 */
if (typeof define === 'function' && define.amd) {
    // expose as AMD module
    define(function () { return factory; });
} else {
    // expose globally
    window.perimeter = factory;
}
