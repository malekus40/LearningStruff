const btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log('You clicked me!');
// };

// btn.onclick = function(){
//     console.log("second click");
// };


btn.addEventListener('click', function() {
    alert('CLICKED!!!');
});

btn.addEventListener('click', function() {
    console.log("you clicked me");
});
btn.addEventListener('mouseover', function(){
    btn.innerText = "Stop touching me";
});

btn.addEventListener('mouseout', () => {
    btn.innerText = "Click me!"
});

window.addEventListener('scroll', function() {
    console.log('STOP SCROLLING');
});