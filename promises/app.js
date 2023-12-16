// const willGetYouADog = new Promise((resolve, reject) => {
//     const rand = Math.random()
//     if (rand < 0.5) {
//         resolve();
//     }else {
//         reject();
//     };
// });

// willGetYouADog.then( () => {
//     console.log('YAY WE GOT A DOG')
// });
// willGetYouADog.catch(() => {
//     console.log(':( no dog');
// })

// const willGetYouADog = () => {
//     new Promise((resolve, reject) => {

//         setTimeout(() => {
//             const rand = Math.random();
//             if (rand < 0.5) {
//                 resolve();
//             } else {
//                 reject();
//             };
//         }, 5000);
//     });
// };

// willGetYouADog.then(() => {
//     console.log('YAY WE GOT A DOG');
// }).catch(() => {
//     console.log(':( no dog');
// });

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();

            const pages = {
                '/users': [
                    { id: 1, username: 'Bilbo' },
                    { id: 2, username: 'Esmerelda' }
                ],
                '/about': 'This is the about page!'
            };

            const data = pages[url];
            if (data) {
                resolve({ status: 200, data });
            } else {
                reject({ status: 404 });
            }
        }, 1000);
    });
};

fakeRequest('/hahah')
    .then((res) => {
        console.log('Status Code', res.status);
        console.log('Data', res.data);
        console.log('Request Worked');
    })
    .catch((res) => {
        console.log('Requerst Failed');
        console.log(res.status);
    });