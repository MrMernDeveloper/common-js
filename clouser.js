function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}
const fistserve = kitchen();
console.log(fistserve());
console.log(fistserve());
console.log(fistserve());
console.log(fistserve());