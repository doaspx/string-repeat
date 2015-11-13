/**
 * Created by ÀÏÃ¨ on 2014/06/13.
 */
var repeat = require('./');

(function(test) {
    console.log(repeat('a', 1), 'a');
    console.log(repeat('a', 2), 'aa');
    console.log(repeat('a', 5), 'aaaaa');
    console.log(repeat('repeat ', 1), 'repeat ');
    console.log(repeat('repeat ', 2), 'repeat repeat ');
    console.log(repeat('repeat ', 5), 'repeat repeat repeat repeat repeat ');
})();

