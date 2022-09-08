//javascript is a dynamic typed language
// primitive type
const a = 5;
const b = 'samsu kopai na ekhon r';
const d = true;

//none-primitive
const ages = [45, 65, 48]
const student = { id: 23, class: 7 }

//
let x = 5;
let y = x;
console.log(x, y)
y = 7
console.log(x, y)
let p = { job: 'web developer' }
let q = p;
// q = {job : 'back-end'}
q.job = 'backend' // changed both value for none premitive
console.log(p,q)


