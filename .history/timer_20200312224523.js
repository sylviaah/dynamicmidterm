var time = document.querySelector(".timer"),
    style = window.getComputedStyle(time,':before').transform;

    function time(){
        if(time = "rotate(180deg)"){
            alert("It works");
        }
    }