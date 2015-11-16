/**
 * Created by ¿œ√® on 2014/06/13.
 */
var nativeRepeat = String.prototype.repeat;

module.exports = (function() {
    if (typeof nativeRepeat === 'function') {
        return function(input, times) {
            return input.repeat(times);
        };
    } else {
        return function(input, times) {
            var inputType = typeof input;

            if(inputType !== 'string') return '';
            if(times < 0) return '';

            var ret = '';
            if(times === 1) return input;
            if(times === 2) return input + input;
            for(var i = 0; i < times; i++) {
                ret += input;
            }
            return ret;
        };
    }
})();
