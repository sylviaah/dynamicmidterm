    var timeOut;

    function start(){
        document.querySelector(".timer").style.visibility = 'visible';
        document.querySelector(".innerTimer").style.display = 'block';
        timeOut = setTimeout(function(){stop(); }, 10000);
    }

    function stop(){
        document.querySelector(".timer").style.visibility = 'hidden';
        timeOut = setTimeout(function(){alert("Out of time!"); }, 1);
    }