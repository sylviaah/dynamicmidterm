var instructions_data = {
    toggle_state:false,
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
            text:"3. Answer the question correctly to earn a star! Collect a star for each story and earn up to 4 stars!",
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
    if(instructions_data.stepNum === instructions_data.stepNum){
        instructions_data.stepNum++;
        change_ins();
    }
}

function previous(){
    if(instructions_data.stepNum === instructions_data.stepNum){
        instructions_data.stepNum--;
        change_ins();
    }
}

function change_ins(){
    document.querySelector(".instructions_image").src = instructions_data.steps[instructions_data.stepNum].image;
    document.querySelector(".instructions_text").innerHTML = instructions_data.steps[instructions_data.stepNum].text;
    document.querySelector(".material-icons.arrow_left").style.visibility = instructions_data.steps[instructions_data.stepNum].arrow_left;
    document.querySelector(".material-icons.arrow_right").style.visibility = instructions_data.steps[instructions_data.stepNum].arrow_right;
    document.querySelector(".instructions_button").style.visibility = instructions_data.steps[instructions_data.stepNum].ok_button;
}

function instructionsToggle(){
    if(instructions_data.toggle_state === true){
        document.querySelector(".instructions_overlay").style.display = "none";
        instructions_data.toggle_state = false;
    } else if (instructions_data.toggle_state === false){
        instructions_data.stepNum = 0;
        change_ins();
        document.querySelector(".instructions_overlay").style.display = "flex";
        instructions_data.toggle_state = true;
    }
}