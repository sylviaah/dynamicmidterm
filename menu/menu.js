var menu_data = {
    menu_toggle:false,
    storyNum:0,
    menu_story:[
        "one",
        "two",
        "three",
        "four"
    ]
}


function menuToggle(){
    if(menu_data.menu_toggle === false){
        document.querySelector(".menu_div").style.display = "flex";
        document.querySelector(".slider").style.display = "none";
        document.querySelector(".header_title").innerHTML = "Kid's Court";
        // document.querySelector(".questions").style.display = "none";
        // timer_stop();
        menu_data.menu_toggle = true;
    } else if(menu_data.menu_toggle === true){
        document.querySelector(".menu_div").style.display = "none";
        menu_data.menu_toggle = false;
    }
}

function add_menu(){
    menu_data.storyNum++;
    document.querySelector(".menu_story."+menu_data.menu_story[menu_data.storyNum]).style.display = "flex";
    document.querySelector(".menu_start").style.display = "none";
}

function newStory(num){
    quiz_data.questionNum = num;
    change_header();
    if(num === 0){
        popup_data.popupNum = 0;
    } else if(num === 1){
        popup_data.popupNum = 3;
    } else if(num === 2){
        popup_data.popupNum = 5;
    } else if(num === 3){
        popup_data.popupNum = 7;
    }
    change_popup();
    slider_start();
    change_sli();
    menuToggle();
}