const button = document.getElementById('menu');

const navbar = document.getElementById('nav');

button.onclick = () => {
    navbar.classList.toggle('active');
    if (button.src === 'https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png') {
        button.src = 'https://png.pngtree.com/svg/20161107/c55e173f8b.png';
    }
    else {
        button.src = 'https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png';
    }   
}
