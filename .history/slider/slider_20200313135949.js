function start(){
    document.querySelector(".slider_progress").style.display = "flex";
    document.querySelector(".slider_slider").style.display = "flex";
    document.querySelector(".slider_menu").style.display = "none";
}

var data = {
    sceneNum:0,
    scenes:[
        {
            
            progress:".progress0",
            image1:"imgs/img1.jpg",
            image2:"imgs/img1.jpg",
            arrow_left:"hidden",
            arrow_right:"visible",
        },
        {
            progress:".progress25",
            image1:"imgs/img2.jpg",
            image2:"imgs/img2.jpg",
            arrow_left:"visible",
            arrow_right:"visible",
        },
        {
            progress:".progress50",
            image1:"imgs/img3.jpg",
            image2:"imgs/img3.jpg",
            arrow_left:"visible",
            arrow_right:"visible",
        },
        {
            progress:".progress75",
            image1:"imgs/img4.jpg",
            image2:"imgs/img4.jpg",
            arrow_left:"visible",
            arrow_right:"visible",
        },
        {
            progress:".progress100",
            image1:"imgs/img5.jpg",
            image2:"imgs/img5.jpg",
            arrow_left:"visible",
            arrow_right:"hidden",
        },
        
    ]
}

function change(){
    document.querySelector(".slider_image.img1").src = data.scenes[data.sceneNum].image1;
    document.querySelector(".slider_image.img2").src = data.scenes[data.sceneNum].image2;
    document.querySelector(".material-icons.arrow_left").style.visibility = data.scenes[data.sceneNum].arrow_left;
    document.querySelector(".material-icons.arrow_right").style.visibility = data.scenes[data.sceneNum].arrow_right;
}

function next(){
    if(data.sceneNum === data.sceneNum){
        data.sceneNum++;
        change();
        document.querySelector(data.scenes[data.sceneNum].progress).style.backgroundColor = "skyblue";
    }
}

function previous(){
    if(data.sceneNum === data.sceneNum){
        data.sceneNum--;
        change();document.querySelector(data.scenes[data.sceneNum].progress).style.backgroundColor = "white";

    }
}