// const allLis = document.querySelectorAll('li');
// for (let i = 0; i < allLis.length; i++) {
//     allLis[i].innerText = 'We are the champions!'
// }
// for (let i = 0; i < allLis.length; i++) {
//     allLis[i].innerHTML = 'We are <b>the champions!</b>'
// }

const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

allLis.forEach((li,i) => {
    const color = colors[i];
    li.style.color = color;
})