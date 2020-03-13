var time = document.querySelector(".timer");
var style = window.getComputedStyle(time,':before').transform;

var display = document.querySelector(".timer");
var style = window.getComputedStyle(display,':before').display;

    function start(){
        document.querySelector(".timer").style.visibility = "visible";
        display = "block";
        if(time = "rotate(175deg)"){
            // alert("It works");
        }
    }