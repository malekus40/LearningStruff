async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const results = await Promise.all([prom1, prom2, prom3]);
    printPokemon(results);
}
function printPokemon(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name);
    }
}

get3Pokemon();

// function changeBodyColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// }

// async function lightShow() {
//     const p1 =  changeBodyColor('teal', 1000);
//     const p2 =  changeBodyColor('pink', 1000);
//     const p3 =  changeBodyColor('red', 1000);
//     const p4 =  changeBodyColor('black', 1000);
//     const p5 =  changeBodyColor('green', 1000);
//     await p1;
//     await p2;
//     await p3;
//     await p4;
//     await p5;
// }
// lightShow();