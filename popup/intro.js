var intro_data = {
    introNum:0,
    intro:[
        {
            title:"Welcome to Kid's Court!",
            image:"imgs/img1.jpg",
            text:"intro text",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            title:"Welcome slide 2",
            image:"imgs/img2.jpg",
            text:"intro text 2",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            title:"Welcome slide 3",
            image:"imgs/img3.jpg",
            text:"intro text 3",
            back:"flex",
            next:"none",
            start:"flex"
        }
    ]
}

function change_intro(){
    document.querySelector(".intro_overlay").style.display = "flex";
    document.querySelector(".intro_title").innerHTML = intro_data.intro[intro_data.introNum].title;
    document.querySelector(".intro_image").src = intro_data.intro[intro_data.introNum].image;
    document.querySelector(".intro_text.subtitle").innerHTML = intro_data.intro[intro_data.introNum].subtitle;
    document.querySelector(".intro_text.body").innerHTML = intro_data.intro[intro_data.introNum].text;
    document.querySelector(".intro_buttons.back").style.display = intro_data.intro[intro_data.introNum].back;
    document.querySelector(".intro_buttons.next").style.display = intro_data.intro[intro_data.introNum].next;
    document.querySelector(".intro_buttons.start").style.display = intro_data.intro[intro_data.introNum].start;
}

function next_intro(){
    intro_data.introNum++;
    change_intro();
}

function back_intro(){
    intro_data.introNum--;
    change_intro();
}

function end_intro(){
    document.querySelector(".intro_overlay").style.display = "none";
}