function slider_start(){
    document.querySelector(".slider_progress").style.display = "flex";
    document.querySelector(".slider_slider").style.display = "flex";
    document.querySelector(".slider_menu").style.display = "none";
}

var slider_data = {
    sceneNum:0,
    scenes:[
        {         
            progress:".menu_start",
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
    progressReset();
    document.querySelector(slider_data.scenes[slider_data.sceneNum].progress).style.backgroundColor = "skyblue";
    document.querySelector(".slider_image.img1").src = slider_data.scenes[slider_data.sceneNum].image1;
    document.querySelector(".slider_image.img2").src = slider_data.scenes[slider_data.sceneNum].image2;
    document.querySelector(".material-icons.slider_arrow_left").style.visibility = slider_data.scenes[slider_data.sceneNum].arrow_left;
    document.querySelector(".material-icons.slider_arrow_right").style.visibility = slider_data.scenes[slider_data.sceneNum].arrow_right;
}

function progressReset(){
    document.querySelector(".progress25").style.backgroundColor = "white";
    document.querySelector(".progress50").style.backgroundColor = "white";
    document.querySelector(".progress75").style.backgroundColor = "white";
    document.querySelector(".progress100").style.backgroundColor = "white";
}

function slider_next(){
    console.log("works");
    if(slider_data.sceneNum === slider_data.sceneNum){
        console.log(sceneNum);
        slider_data.sceneNum++;
        change();
    }
}

function slider_previous(){
    if(slider_data.sceneNum === slider_data.sceneNum){
        slider_data.sceneNum--;
        change();
    }
}