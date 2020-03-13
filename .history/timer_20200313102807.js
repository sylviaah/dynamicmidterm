    var timeOut;

    function start(){
        document.querySelector(".timer").style.visibility = 'visible';
        document.querySelector(".innerTimer").style.display = 'block';
        timeOut = setTimeout(start(), 5000);
        stop();
    }

    function stop(){
        document.querySelector(".timer").style.visibility = 'hidden';
        // document.querySelector(".innerTimer").style.display = 'block';
    }