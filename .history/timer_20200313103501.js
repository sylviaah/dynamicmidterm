    var timeOut;

    function start(){
        document.querySelector(".timer").style.visibility = 'visible';
        document.querySelector(".innerTimer").style.display = 'block';
        timeOut = setTimeout(function(){ stop(); }, 5000);
    }

    function stop(){
        document.querySelector(".timer").style.visibility = 'hidden';
        // document.querySelector(".innerTimer").style.display = 'block';
    }