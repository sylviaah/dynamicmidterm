var data = {
    toggle_state:true,
    stepNum:0,
    steps:[
        {
            image:"imgs/img1.jpg",
            text:"1. Click on the Start button to start reading through the comic.",
            arrow_left:"hidden",
            arrow_right:"visible",
            ok_button:"hidden"
        },
        {
            image:"imgs/img2.jpg",
            text:"2. Answer the question before the time runs out, if you run out of time, you can try again!",
            arrow_left:"visible",
            arrow_right:"visible",
            ok_button:"hidden"
        },
        {
            image:"imgs/img3.jpg",
            text:"3. Answer the question correctly to earn a star! Collect a star for each story and earn up to 5 stars!",
            arrow_left:"visible",
            arrow_right:"visible",
            ok_button:"hidden"
        },
        {
            image:"imgs/img4.jpg",
            text:"4. When you answer the question correctly, you can click on the 'Next Story' button!",
            arrow_left:"visible",
            arrow_right:"visible",
            ok_button:"hidden"
        },
        {
            image:"imgs/img5.jpg",
            text:"5. If you answer incorrectly, you can try again by clicking on the 'Try Again' button!",
            arrow_left:"visible",
            arrow_right:"hidden",
            ok_button:"visible"
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
    document.querySelector(".instructions_text").innerHTML = data.steps[data.stepNum].text;
    document.querySelector(".material-icons.arrow_left").style.visibility = data.steps[data.stepNum].arrow_left;
    document.querySelector(".material-icons.arrow_right").style.visibility = data.steps[data.stepNum].arrow_right;
    document.querySelector(".instructions_button").style.visibility = data.steps[data.stepNum].ok_button;
}

function instructionsToggle(){
    if(data.toggle_state === true){
        document.querySelector(".instructions_overlay").style.display = "none";
        data.toggle_state = false;
    } else if (data.toggle_state === false){
        data.stepNum = 0;
        document.querySelector(".instructions_overlay").style.display = "flex";
        data.toggle_state = true;
    }
}