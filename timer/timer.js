    var timeOut;

    function timer_start(){
        document.querySelector(".timer").style.visibility = 'visible';
        document.querySelector(".innerTimer").style.display = 'block';
        timeOut = setTimeout(function(){timer_stop(); out_of_time(); }, 10000);
    }

    function timer_stop(){
        document.querySelector(".timer").style.visibility = 'hidden';
        document.querySelector(".innerTimer").style.display = 'none';
        clearTimeout(timeOut);
        
    }

    function out_of_time(){
        timeOut = setTimeout(function(){check_answer(3); }, 1);
        document.querySelector(".answers_image_div").style.display = "flex";
        document.querySelector(".answers_image").src = "imgs/img0.16.jpg";
    }