//let xInput = document.getElementById("form:x_value_input").value;
//let yInput = document.getElementById("form:y_value").value;
//let rInput = document.getElementById("form:r_value").value;

setInterval(function(){
    let xInput = document.getElementById("form:x_value_input");
    console.log(xInput.value);
    xInput.setAttribute("value", 0);
    console.log(xInput.getAttribute("value"));
}, 5000);