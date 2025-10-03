const btn = document.getElementById('btnChangeBg');
const colors = ['#fff8e7', '#dff0d8', '#d9edf7', '#fcf8e3', '#f2dede'];
let index = 0;

btn.addEventListener('click', () => {
    index = (index + 1) % colors.length;
    document.body.style.backgroundColor = colors[index];
});
