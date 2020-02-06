window.onload = function() {
    const date = new Date();
    const format = [
        (date.getHours()),
        (date.getMinutes()<10?'0':'') + date.getMinutes(),
        (date.getSeconds()<10?'0':'') + date.getSeconds()  ].join(":");
    document.getElementById("chasiki").innerHTML = format;
};

setInterval(function(){
    const date = new Date();
    const format = [
        (date.getHours()),
        (date.getMinutes()<10?'0':'') + date.getMinutes(),
        (date.getSeconds()<10?'0':'') + date.getSeconds()  ].join(":");
    document.getElementById("chasiki").innerHTML = format;
}, 8000);