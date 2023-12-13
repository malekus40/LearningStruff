const btn = document.querySelector('button');
btn.addEventListener('mouseover', () => {
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);

    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
})

btn.addEventListener('click', function(){
    btn.innerText = 'YOu got me';
    document.body.style.backgroundColor = 'green';
});