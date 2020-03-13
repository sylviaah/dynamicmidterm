var time = document.querySelector(".timer::before"),
    style = window.getComputedStyle(time),
    transform = style.getPropertyValue('transform');

    function time(){
        if(time = "rotate(180deg)"){
            alert("It works");
        }
    }