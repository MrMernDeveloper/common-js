/*
8 ways to get undefind
1. variable that is not initialized will give undefind
2. function with no return
3. parameter that is not passed will be undefind
4. if retun has nothing on the right side will retun undefind
5. properties that doesnt exists on an object will give you undefind
6.accesing arry element outside of the index range
7. deleting an element inside an arry 
8. set a value directly to undefind


*/

let first;
// console.log(first);

function second(a, b) {
    const total = a + b;
}

const result = second()
// console.log(result);

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
// third(2, 5);

function noNagative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a+b
}
// console.log(noNagative(2,-1))

const fifth = { id: 2, name: 'ponchom', age: 40 }
// console.log(fifth.age, fifth.salary)

const sixth = [4, 89, 87, 56, 54]
// you should not do it . inist use splice
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200])
console.log(sixth)

const eighth = undefined;
const ninth = null;
const data = {results:[],updated:null}
console.log(eighth)