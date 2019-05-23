let a = 0;
// var b = 0;

function foo() {
    var a = 1;
    var b = 1;
    console.log('foo: ' + a, b);
}

function bar() {
    console.log('bar: ' + a, b);
}

{
    var b = 2;
}

console.log(a);
console.log(b);

foo();
bar();

var arr = [1, 2, 3, 4, 5];


function moo() {
    let abc = arr.map(x => [x, x * 2]);
    return abc;
}

console.log(moo());

var arrB = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

function okay() {
    let def = arrB.flat();
    let bde = arrB.flat(Infinity);
    return bde, def;
}

console.log(okay());