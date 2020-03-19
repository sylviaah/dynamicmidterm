var popup_data = {
    popupNum: 0,
    def:[
        {
            title:"What's that?",
            image:"imgs/img4.jpg",
            subtitle:"What is an Argument?",
            text:"A good argument must always have the following:<br>"+
            "1. A Reason for the argument<br>"+
            "2. A conclusion to the argument",
            exit:"flex",
            back:"none",
            next:"flex",
            start:"none"
        },
        {
            title:"Watch Out!",
            image:"imgs/img5.jpg",
            subtitle:"Special Pleading:",
            text:"A special pleading is not a proper argument! It is a fallacy citing that there should be an exception to a general rule.",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            title:"Don't Forget",
            image:"imgs/img6.jpg",
            subtitle:"Appeal to Authority:",
            text:"An appeal to authority claims something must be true because someone in “power” says it.",
            exit:"none",
            back:"flex",
            next:"none",
            start:"flex"
        },
        {
            title:"Watch Out!",
            image:"imgs/img8.jpg",
            subtitle:"Gambler's Fallacy:",
            text:"This is not an argument! The fact that an event has happened more in the past, does not mean that it is more likely to happen in the future!",
            exit:"flex",
            back:"none",
            next:"flex",
            start:"none"
        },
        {
            title:"Don't Forget",
            image:"imgs/img9.jpg",
            subtitle:"Begging the Question",
            text:"This is when the thing that you are trying to prove is already assumed to be true, so you are not actually adding anything to the argument.",
            exit:"none",
            back:"flex",
            next:"none",
            start:"flex"
        },
        {
            title:"Remember!",
            image:"imgs/img7.jpg",
            subtitle:"What is an argument?",
            text:"A good argument must always have the following:<br>"+
            "1. A Reason for the argument<br>"+
            "2. A conclusion to the argument",
            exit:"flex",
            back:"none",
            next:"flex",
            start:"none"
        },
        {
            title:"Watch Out!",
            image:"imgs/img9.jpg",
            subtitle:"Appeal to Emotion",
            text:"An appeal to emotion is not an argument! It's when you attempt to manipulate an emotional response instead of a valid or compelling argument.",
            exit:"none",
            back:"flex",
            next:"none",
            start:"flex"
        },
        {
            title:"Don't Forget",
            image:"imgs/img6.jpg",
            subtitle:"Appeal to Authority:",
            text:"An appeal to authority claims something must be true because someone in “power” says it.",
            exit:"flex",
            back:"none",
            next:"none",
            start:"flex"
        },
    ]
}

function change_popup(){
    document.querySelector(".popup_overlay").style.display = "flex";
    document.querySelector(".popup_title").innerHTML = popup_data.def[popup_data.popupNum].title;
    document.querySelector(".popup_image").src = popup_data.def[popup_data.popupNum].image;
    document.querySelector(".popup_text.subtitle").innerHTML = popup_data.def[popup_data.popupNum].subtitle;
    document.querySelector(".popup_text.body").innerHTML = popup_data.def[popup_data.popupNum].text;
    document.querySelector(".popup_buttons.exit").style.display = popup_data.def[popup_data.popupNum].exit;
    document.querySelector(".popup_buttons.back").style.display = popup_data.def[popup_data.popupNum].back;
    document.querySelector(".popup_buttons.next").style.display = popup_data.def[popup_data.popupNum].next;
    document.querySelector(".popup_buttons.start").style.display = popup_data.def[popup_data.popupNum].start;
}

function next_popup(){
    popup_data.popupNum++;
    change_popup();
}

function back_popup(){
    popup_data.popupNum--;
    change_popup();
}

function end_popup(){
    document.querySelector(".popup_overlay").style.display = "none";
    document.querySelector(".slider").style.display = "flex";
    document.querySelector(".slider_progress").style.display = "flex";
    document.querySelector(".slider_slider").style.display = "flex";
    document.querySelector(".slider_menu").style.display = "none";
    change_sli();
    timer_stop();
}