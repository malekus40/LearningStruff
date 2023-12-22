// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function () {
//     console.log('it worked!!!!');
//     const data = JSON.parse(this.responseText);
//     console.log(data.results[0].films[0]);
//     const filmURL = data.results[0].films[0];
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load', function () {
//         console.log('Second Request Worked!!!');
//         const filmData = JSON.parse(this.responseText);
//         console.log(filmData);
//     });
//     filmReq.addEventListener('error', function (e) {
//         console.log('Error!!', e);
//     });

//     filmReq.open('GET', filmURL);
//     filmReq.send();

//     // for (let planet of data.results){
//     //     console.log(planet.name)
//     // }

// });
// firstReq.addEventListener('error', () => {
//     console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

// const checkStatusAndParse = (responce) => {
//     if (!responce.ok) {
//         throw new Error(`Status Code Error: ${responce.status}`);
//     }
//     return responce.json();
// };

// const printPlanets = (data) => {
//     console.log("fetched next 10 planets");
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next);
// };

// const fetchNextPlanet = (url = 'https://swapi.dev/api/planets/') => {
//     return fetch(url);
// };

// fetchNextPlanet()
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .then(fetchNextPlanet)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .catch((err) => {
//         console.log("somehting went wrong");
//         console.log(err);
//     });
const fetchNextPlanet = (url = 'https://swapi.dev/api/planets/') => {
    return axios.get(url);
};
const printPlanets = ({ data }) => {
    console.log(data);
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};
fetchNextPlanet()
    .then(printPlanets)
    .then(fetchNextPlanet)
    .then(printPlanets)
    .then(printPlanets)
    .then(fetchNextPlanet)
    .then(printPlanets)
    .then(fetchNextPlanet)
    .then(printPlanets)
    .then(fetchNextPlanet)
    .catch((err) => {
        console.log('ERROR!!', err);
    });
