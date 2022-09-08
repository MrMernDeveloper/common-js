print5();
// print10();
console.log(print10)


for (var i = 0; i < 5; i++){
    console.log(i)                      // var using hoisting
}
console.log('outside', i)


function print5() {
    console.log('inside print', 5)
}

var print10 = function () {                 // var diye expression function use kora jai na
    console.log('inside printed', 10)
}