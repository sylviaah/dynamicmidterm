    var timeOut;

    function timer_start(){
        document.querySelector(".timer").style.visibility = 'visible';
        document.querySelector(".innerTimer").style.display = 'block';
        timeOut = setTimeout(function(){timer_stop(); }, 10000);
    }

    function timer_stop(){
        document.querySelector(".timer").style.visibility = 'hidden';
        document.querySelector(".innerTimer").style.display = 'none';
        clearTimeout(timeOut);
        
    }

    function out_of_time(){
        timeOut = setTimeout(function(){alert("Out of time!"); }, 1);
    }