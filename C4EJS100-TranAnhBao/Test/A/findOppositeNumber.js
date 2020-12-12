function findOppositeNumber(n, inputNumber) {
    var result;
    let x = n/2;
    if(inputNumber < x) {
        result = inputNumber + x;
    } else {
        result = inputNumber - x;
    }
    return result;
}
console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));