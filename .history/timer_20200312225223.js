var time = document.querySelector(".timer");
var style = window.getComputedStyle(time,':before').transform;

    function time(){
        document.querySelector(".timer::before").style.animate = "animation: spin 1s linear infinite,"+"
        bg 2s step-end infinite";
        if(time = "rotate(175deg)"){
            alert("It works");
        }
    }