# string-repeat
repeat string of supply



(function(test) {
    console.log(repeat('a', 1), 'a');
    console.log(repeat('a', 2), 'aa');
    console.log(repeat('a', 5), 'aaaaa');
    console.log(repeat('repeat ', 1), 'repeat ');
    console.log(repeat('repeat ', 2), 'repeat repeat ');
    console.log(repeat('repeat ', 5), 'repeat repeat repeat repeat repeat ');
})();

a a
aa aa
aaaaa aaaaa
repeat  repeat 
repeat repeat  repeat repeat 
repeat repeat repeat repeat repeat  repeat repeat repeat repeat repeat 
