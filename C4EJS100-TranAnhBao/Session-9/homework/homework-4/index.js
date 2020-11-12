function random0to10(){
    return Math.floor(Math.random() * 10);
}
const x = random0to10();
if (x < 0) {
    console.log('Failed: the number is smaller than 0');
} else if (x > 10) {
    console.log('Failed: the number is bigger than 10');
} else {
    console.log('Passed, bravo');
}