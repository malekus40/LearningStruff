const btn = document.querySelector('button');
// setTimeout(() => {
//     btn.style.transform = `translatex(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translatex(200px)`;
//     },1000);
// }, 1000);

const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
        if (elRight + amount > bodyBoundary) {
            reject({bodyBoundary, elRight, amount});
        }
        else {
            setTimeout(() => {
                element.style.transform = `translateX(${currLeft + amount}px)`;
                resolve();
            }, delay);
        }
    });

};

moveX(btn, 10, 50)
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    .then(() => moveX(btn, 10, 15))
    
    .catch((res) => {
    console.log(`Body is ${res.bodyBoundary}px wide`);
    console.log(`Element is at ${res.elRight}px, ${res.amount}px is too large!`);
});

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 1000, 1000);
//             });
//         });
//     });
// });
// moveX(btn, 100, 1000, () => {

//     moveX(btn, 400, 1000, () => {

//         moveX(btn, 700, 1000, () => {
//             console.log("REALLY, WE STILL HAVE SCREEN LEFT?");
//         })
//     })
// });



