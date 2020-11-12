// async function load(){
//     const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR38xTTH3NccCxIG31dB_q5r2DcOSKcJVTSyjnxd89Ca-TN57Ln66PMcseM');
//     const data = await conn.json();
//     console.log(data);
// }
// load();

function generateId(){
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2, 9);
    return z;
}
let x = generateId();
console.log(x);
