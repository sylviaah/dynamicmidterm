var time = document.querySelector(".timer");
var style = window.getComputedStyle(time,':before').transform;

var display = window.getComputedStyle(
	document.querySelector('.timer'), ':before'
).getPropertyValue('display');

    function start(){
        document.querySelector(".timer").style.visibility = "visible";
        document.querySelector(display).style.display = "block";
        if(time = "rotate(175deg)"){
            // alert("It works");
        }
    }