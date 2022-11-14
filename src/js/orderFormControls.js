function orderFormControls() {
    const slider = document.getElementById("orderRange");
    const output = document.getElementById("orderSumm");
    output.value = 250000;

    slider.oninput = function() {
        output.value = this.value;
    }
    output.oninput = function() {
        slider.value = this.value;
    }

    const orderSelect = document.getElementById("orderSelect");
    orderSelect.addEventListener('change', function(){  
        var getValue = this.value;
        // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
        console.log( getValue );
    });

  
}

export default orderFormControls;