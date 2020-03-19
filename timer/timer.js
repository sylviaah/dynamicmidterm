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
        // document.querySelector(".answers_overlay").style.display = "flex";
        // document.querySelector(".answers_title").innerHTML = quiz_data.time_out[0].title;
        // document.querySelector(".answers_subtitle").innerHTML = quiz_data.time_out[0].subtitle;
        // document.querySelector(".answers_exp").innerHTML = quiz_data.time_out[0].exp;
        // document.querySelector(".buttons_next").innerHTML = quiz_data.time_out[0].next;
    }