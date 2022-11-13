function orderForm() {
    let currentTab = 0; 
    showTab(currentTab); 

    function showTab(n) {

        let x = document.getElementsByClassName("order-form-tab");

        x[n].style.display = "block";

        if (n == 0) {
            document.getElementById("prevBtn").classList.add('disabled');
        } else {
            document.getElementById("prevBtn").classList.remove('disabled');
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtnSpan").innerHTML = "Оформить";
        } else {
            document.getElementById("nextBtnSpan").innerHTML = "Далее";
        }
        console.log(n)
        fixStepIndicator(n)
    }

    function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("order-form-tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form... :
        if (currentTab >= x.length) {
            //...the form gets submitted:
            document.getElementById("orderForm").submit();
            return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
    }

    function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("order-form-tab");
        y = x[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
            }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
            document.getElementsByClassName("order-form-step")[currentTab].className += " finish";
        }
        return valid; // return the valid status
    }

    function fixStepIndicator(n) {
        console.log(n)
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("order-form-step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class to the current step:
        x[n].className += " active";
    }

    document.getElementById("prevBtn").addEventListener('click', ()=>{
        nextPrev(-1);
    });
    document.getElementById("nextBtn").addEventListener('click', ()=>{
        nextPrev(1);
    });
}

export default orderForm;