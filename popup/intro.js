var intro_data = {
    introNum:0,
    intro:[
        {
            image:"imgs/img0.1.jpg",
            exit:"flex",
            back:"none",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.2.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.3.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.4.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.5.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.6.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.7.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.8.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.9.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.10.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.11.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.12.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.13.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.14.jpg",
            exit:"none",
            back:"flex",
            next:"flex",
            start:"none"
        },
        {
            image:"imgs/img0.15.jpg",
            exit:"none",
            back:"flex",
            next:"none",
            start:"flex"
        }
    ]
}

function change_intro(){
    document.querySelector(".intro_overlay").style.display = "flex";
    document.querySelector(".intro_image").src = intro_data.intro[intro_data.introNum].image;
    document.querySelector(".intro_buttons.exit").style.display = intro_data.intro[intro_data.introNum].exit;
    document.querySelector(".intro_buttons.back").style.display = intro_data.intro[intro_data.introNum].back;
    document.querySelector(".intro_buttons.next").style.display = intro_data.intro[intro_data.introNum].next;
    document.querySelector(".intro_buttons.start").style.display = intro_data.intro[intro_data.introNum].start;
}

function exit_intro(){
    change_intro();
    document.querySelector(".intro_overlay").style.display = "none";
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
    intro_data.introNum = 0;
}