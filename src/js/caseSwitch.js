function caseSwitch() {
    const cases = document.querySelectorAll('.case-item');
    let i = 0;

    function caseAnimate() {
        cases.forEach(item => {
            item.classList.remove('animate');
        });
        if (i < 4) {
            cases[i].classList.add('animate');
            i++;
        } else {
            i = 0;
        }
    }
    const switchIconInterval = setInterval(caseAnimate, 6000);
}

export default caseSwitch;