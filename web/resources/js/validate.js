//let xInput = document.getElementById("form:x_value_input");
//let yInput = document.getElementById("form:y_value");
//let rInput = document.getElementById("form:r_value");
//let submit = document.getElementById("form:submit");
let y = $('#form:y_value')[0];
let r = $('#form:x_value')[0];
let x = $('#form:x_value_input')[0];

$(document).ready(function (event) {
    $('#form:submit').submit(function (event) {
        if ((checkError(y.value)) || (checkError(x.value))) {
            event.preventDefault();
            if (checkError(y.value))
                showError(y);
            if (checkError())
        }
    });
});

function checkError(string) {
    return ((string === '') || (string.slice(-1) === ',') || (string.slice(-1) === '.'))
}

function showError(target) {
    target.classList.toggle('shake');
    setTimeout(() => {
        target.classList.toggle('shake');
    }, 500);
}