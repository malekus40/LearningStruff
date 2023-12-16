const btn = document.querySelector('button');
// setTimeout(() => {
//     btn.style.transform = `translatex(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translatex(200px)`;
//     },1000);
// }, 1000);

const moveX = (element, amount, delay, onSuccess, onFailure) => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if (elRight + amount > bodyBoundary) {
        onFailure();
    }
    else {
        setTimeout(() => {
            element.style.transform = `translateX(${currLeft + amount}px)`;
            onSuccess();
        }, delay);
    }
};

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



requestAnimationFrame(())

