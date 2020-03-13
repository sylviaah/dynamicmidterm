var time = document.querySelector(".timer::before"),
    style = window.getComputedStyle('element'),
    transform = style.getPropertyValue('transform');

    function time(){
        if(time = "rotate(180deg)"){
            alert("It works");
        }
    }