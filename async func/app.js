function getData() {
    const data = axios.get('https://swapi.dev/api/planets');
    console.log(data);
}

async function greet() {
    return 'hello';
}

greet().then((val) => console.log('Promise resolved with:', val));
async function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be numbers!';
    }
    return x + y;
}

async function addAsPromise(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            reject('X and Y must be numbers!');
        }
        resolve(x + y);
    });
}

// function getPlanets() {
//     return axios.get('https://swapi.dev/api/planets/');
// }

// getPlanets().then((res) => {
//     console.log(res.data);
// });

async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.dev/api/planets/');
        console.log(res.data);
    } catch (e) {
        console.log('In catch', e);
    }
}
getPlanets();