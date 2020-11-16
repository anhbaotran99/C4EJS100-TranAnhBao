let products = [
    {name: 'Xiaomi portable charger 2000mAh', brand: 'Xiaomi', price: 428, color: 'White', category: 'Charger'},
    {name: 'VSmart active 1', brand: 'VSmart', price: 5487, color: 'Black', category: 'Phone'},
    {name: 'IPhone X', brand: 'Apple', price: 21490, color: 'Gray', category: 'Phone'},
    {name: 'Samsung galaxy A9', brand: 'Samsung', price: 8490, color: 'Blue', category: 'Phone'},
];

// 5.1
for (let product of products) {
    console.log('---------------------------------------');
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
}

// 5.2
for(let i in products)
{
    console.log(`#${Number(i)+1}. Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
}
let position = prompt('Enter product positon');
for(let product in products[position-1])
{
    console.log(`${product}: ${products[position-1][product]}`);
}