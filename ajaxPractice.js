// Sync code example 

function otherFunctionality () {
    console.log('we are in another function')
}
console.log('start');

otherFunctionality();

console.log('end');

//Async code example

console.log('start async');

setTimeout(() => {
    console.log('timeout');
}, 5000);

console.log('end');