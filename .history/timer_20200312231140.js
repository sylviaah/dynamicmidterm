var time = document.querySelector(".timer"),
    style = window.getComputedStyle(time,':before').transform;

var display = window.getComputedStyle(
	document.querySelector('.timer'), ':before'
).getPropertyValue('display');

    function start(){
        document.querySelector(".timer").style.visibility = "visible";
        time = "rotate(0deg)";
        if(time = "rotate(175deg)"){
            // alert("It works");
        }
    }