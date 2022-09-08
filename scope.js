function add(a, b) {
    const total = a + b;
    // console.log(a, b)
    if (b > 5) {
        const sum = 25 + a + b; // var using hoisting
    }
    else {
        var current = 5 + a + b;

    }
    console.log(current)
    return total;
}

add(5, 3);