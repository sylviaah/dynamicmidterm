function slider_show(){
    document.querySelector(".slider").style.display = "flex";
    change_header();
}

function slider_start(){
    document.querySelector(".slider_progress").style.display = "flex";
    document.querySelector(".slider_slider").style.display = "flex";
    document.querySelector(".slider_menu").style.display = "none";
    document.querySelector(".slider").style.display = "none";
    change_header();
}

var slider_data = {
    sceneNum:0,
    scenes:[
        {         
            progress:".progress25",
            images:[
                {
                    image1:"imgs/img1.1.jpg",
                    image2:"imgs/img1.2.jpg",
                },
                {
                    image1:"imgs/img2.1.jpg",
                    image2:"imgs/img2.2.jpg",
                },
                {
                    image1:"imgs/img3.1.jpg",
                    image2:"imgs/img3.2.jpg",
                },
                {
                    image1:"imgs/img4.1.jpg",
                    image2:"imgs/img4.2.jpg",
                }
            ],
            arrow_left:"hidden",
            arrow_right:"visible",
        },
        {
            progress:".progress50",
            images:[
                {
                    image1:"imgs/img1.3.jpg",
                    image2:"imgs/img1.4.jpg",
                },
                {
                    image1:"imgs/img2.3.jpg",
                    image2:"imgs/img2.4.jpg",
                },
                {
                    image1:"imgs/img3.3.jpg",
                    image2:"imgs/img3.4.jpg",
                },
                {
                    image1:"imgs/img4.3.jpg",
                    image2:"imgs/img4.4.jpg",
                }
            ],
            arrow_left:"visible",
            arrow_right:"visible",
        },
        {
            progress:".progress75",
            images:[
                {
                    image1:"imgs/img1.5.jpg",
                    image2:"imgs/img1.6.jpg",
                },
                {
                    image1:"imgs/img2.5.jpg",
                    image2:"imgs/img2.6.jpg",
                },
                {
                    image1:"imgs/img3.5.jpg",
                    image2:"imgs/img3.6.jpg",
                },
                {
                    image1:"imgs/img4.5.jpg",
                    image2:"imgs/img4.6.jpg",
                }
            ],
            arrow_left:"visible",
            arrow_right:"visible",
        },
        {
            progress:".progress100",
            images:[
                {
                    image1:"imgs/img1.5.jpg",
                    image2:"imgs/img1.6.jpg",
                },
                {
                    image1:"imgs/img2.4.jpg",
                    image2:"imgs/img2.6.jpg",
                },
                {
                    image1:"imgs/img3.4.jpg",
                    image2:"imgs/img3.6.jpg",
                },
                {
                    image1:"imgs/img4.2.jpg",
                    image2:"imgs/img4.4.jpg",
                }
            ],
            arrow_left:"hidden",
            arrow_right:"hidden",
        },
    ]
}

function change_sli(){
    progressReset();
    document.querySelector(slider_data.scenes[slider_data.sceneNum].progress).style.backgroundColor = "skyblue";
    document.querySelector(".slider_image.img1").src = slider_data.scenes[slider_data.sceneNum].images[quiz_data.questionNum].image1;
    document.querySelector(".slider_image.img2").src = slider_data.scenes[slider_data.sceneNum].images[quiz_data.questionNum].image2;
    document.querySelector(".material-icons.slider_arrow_left").style.visibility = slider_data.scenes[slider_data.sceneNum].arrow_left;
    document.querySelector(".material-icons.slider_arrow_right").style.visibility = slider_data.scenes[slider_data.sceneNum].arrow_right;
    if(slider_data.sceneNum === 3){
        recall_question();
        timer_start();
    }
}

function progressReset(){
    document.querySelector(".progress25").style.backgroundColor = "white";
    document.querySelector(".progress50").style.backgroundColor = "white";
    document.querySelector(".progress75").style.backgroundColor = "white";
    document.querySelector(".progress100").style.backgroundColor = "white";
}

function slider_next(){
    if(slider_data.sceneNum === slider_data.sceneNum){
        slider_data.sceneNum++;
        change_sli();
    }
}

function slider_previous(){
    if(slider_data.sceneNum === slider_data.sceneNum){
        slider_data.sceneNum--;
        change_sli();
        document.querySelector(".questions").style.display = "none";
        timer_stop();
    }
}