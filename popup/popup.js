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
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            title:"Watch Out!",
            image:"imgs/img5.jpg",
            subtitle:"Special Pleading:",
            text:"A special pleading is not a proper argument! It is a fallacy citing that there should be an exception to a general rule.",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            title:"Don't Forget",
            image:"imgs/img6.jpg",
            subtitle:"Appeal to Authority:",
            text:"An appeal to authority claims something must be true because someone in “power” says it.",
            back:"flex",
            next:"none",
            start:"flex"
        },
        {
            title:"Watch Out!",
            image:"imgs/img6.jpg",
            subtitle:"Gambler's Fallacy",
            text:"This is not an argument! The fact that an event has happened more in the past, does not mean that it is more likely to happen in the future!",
            back:"flex",
            next:"flex",
            start:"none"
        },
    ]
}

function change_popup(){
    document.querySelector(".popup_overlay").style.display = "flex";
    document.querySelector(".popup_title").innerHTML = popup_data.def[popup_data.popupNum].title;
    document.querySelector(".popup_image").src = popup_data.def[popup_data.popupNum].image;
    document.querySelector(".popup_text.subtitle").innerHTML = popup_data.def[popup_data.popupNum].subtitle;
    document.querySelector(".popup_text.body").innerHTML = popup_data.def[popup_data.popupNum].text;
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
}