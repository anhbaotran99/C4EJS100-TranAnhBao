const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 86000,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        price: 20000,
        brand: 'Asus',
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        price: 14000,
        brand: 'HP',
        quantity: 7,
    }
]

let inventoryByBrand = {
    'HP': [],
    'Dell': [],
    'Asus': [],
}
for(let i = 0; i < inventory.length; i++)
{
    let laptop = inventory[i];
    // console.log(laptop);
    let brand = laptop.brand;
    inventoryByBrand[brand].push(laptop);
}
console.log(inventoryByBrand);
let brand = prompt('Which brand?');
let detail = '';
let total = 0;
for(let i = 0; i < inventoryByBrand[brand].length; i++)
{
    detail += inventoryByBrand[brand][i].name + '\n';
    total += inventoryByBrand[brand][i].quantity * inventoryByBrand[brand][i].price;
}
alert(`There are ${inventoryByBrand[brand].length} generations of ${brand} in inventory:\n\n${detail}\nWith total value: ${total}K`);

