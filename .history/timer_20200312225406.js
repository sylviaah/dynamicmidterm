var time = document.querySelector(".timer");
var style = window.getComputedStyle(time,':before').transform;

    function time(){
        document.querySelector(".timer").style.visibility = "visible";
        if(time = "rotate(175deg)"){
            alert("It works");
        }
    }