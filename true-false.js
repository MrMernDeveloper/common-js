/*
truthy:
1. true
2.any number (+ve, -ve) will betruthy other than 0
3. any sting other than emty string
4. '0'
5. true
6. emty object {}
7. emty arry []
...................
falsy:
...............
1. false
2. 0
3. '' (emty string)
4.false
5.undefind
6. null

*/

/*
let x = {} ; // x= 4, x=0, x= string
if (x) {
    console.log('the value is truthy');
}
else {
    console.log('the value is falsy')
}
*/
const y = 0;
if (!y) {
    console.log('value is falsy')
}

const z = { name: 'rakib' }
if (!!z) {
    console.log('value is truthy')
}