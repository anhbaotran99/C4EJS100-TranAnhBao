const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};
for (let x in product) {
    console.log(x);
}
// 1
console.log("1. x receives from product a property");

// 2
 console.log('2.');
for (let x in product) {
    console.log(`${x}: ${product[x]}`);
}
    
