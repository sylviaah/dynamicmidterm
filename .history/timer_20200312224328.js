var time = document.querySelector(".timer"),
    style = window.getComputedStyle(".timer","::before"),
    transform = style.getPropertyValue('transform');

    function time(){
        if(time = "rotate(180deg)"){
            alert("It works");
        }
    }