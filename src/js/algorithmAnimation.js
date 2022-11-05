algorithmAnimation

function algorithmAnimation() {
    const algorithm = document.querySelector('.algorithm');
    const circles = document.querySelectorAll('.algorithm-icon');
    const topLine = document.querySelector('.line-up-mask');
    const downLine = document.querySelector('.line-down-mask');
    
    function windowScroll() {
        let scrollPosition = window.pageYOffset;
        let sectionTop = algorithm?.offsetTop - 500;
        let sectionBottom = algorithm?.offsetHeight + sectionTop;
            
        if (scrollPosition > sectionTop && scrollPosition < sectionBottom)  { 
            circles?.forEach(circle => circle.classList.add('animation-circle-pump-start'));
            topLine?.classList.add('animation-line-dash-start');
            downLine?.classList.add('animation-line-dash-start');
        }
    }
    
    window.addEventListener('scroll', windowScroll);
}

export default algorithmAnimation;