function burger() {

    const burger = document.querySelector('.ham');
    const menu = document.querySelector('.burger-menu');

    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        })
    }
    
}

export default burger;