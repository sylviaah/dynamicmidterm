var time = document.querySelector(".timer");
var style = window.getComputedStyle(time,':before').transform;

    function start(){
        document.querySelector(".timer").style.visibility = "visible";
        document.querySelector(".timer::before").style.display = "block";
        if(time = "rotate(175deg)"){
            // alert("It works");
        }
    }