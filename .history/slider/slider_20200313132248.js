function start(){
    document.querySelector(".slider_progress").style.display = "flex";
    document.querySelector(".slider_slider").style.display = "flex";
    document.querySelector(".slider_menu").style.display = "none";
}

var data = {
    sceneNum:0,
    scenes:[
        {
            image:"imgs/img1.jpg",
            arrow_left:"hidden",
            arrow_right:"visible",
        },
        {
            image:"imgs/img2.jpg",
            arrow_left:"visible",
            arrow_right:"visible",
        },
        {
            image:"imgs/img3.jpg",
            arrow_left:"visible",
            arrow_right:"visible",
        },
        {
            image:"imgs/img4.jpg",
            arrow_left:"visible",
            arrow_right:"visible",
        },
        {
            image:"imgs/img5.jpg",
            arrow_left:"visible",
            arrow_right:"hidden",
        },
        
    ]
}

function next(){
    if(data.stepNum === data.stepNum){
        data.stepNum++;
        change();
    }
}

function previous(){
    if(data.stepNum === data.stepNum){
        data.stepNum--;
        change();
    }
}

function change(){
    document.querySelector(".instructions_image").src = data.steps[data.stepNum].image;
    document.querySelector(".material-icons.arrow_left").style.visibility = data.steps[data.stepNum].arrow_left;
    document.querySelector(".material-icons.arrow_right").style.visibility = data.steps[data.stepNum].arrow_right;
}