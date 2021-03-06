// questions
var quiz_data = {
    secondTry: false,
    questionNum:0,
    scoreNum:-1,
    questions:[
        {
            question: "Question 1: Who is making a good argument?",
            answers:[
                {
                    title: "That's Incorrect.",
                    score:0,
                    image: "imgs/img0.17.jpg",
                    subtitle: "Try again!",
                    exp: "Brother has not provided any reasons for his conclusion. He is making a <strong>Special Pleading</strong><br>"+
                    "<br><strong>Special Pleading:</strong> a special pleading is not a proper argument! It is a fallacy citing that there should be an exception to a general rule.",
                    next: "Try Again"
                },
                {
                    title: "That's Correct!",
                    score:1,
                    image: "imgs/img0.18.jpg",
                    subtitle: "You earned a star! Nice job!",
                    exp: "Sister has provided reasons for her conclusion. This is a reasonable <strong>Appeal to Authority</strong><br>"+
                    "<br><strong>Appeal to Authority:</strong> an appeal to authority claims something must be true because someone in 'power' says it.",
                    next: "Next Story!"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    image: "imgs/img0.17.jpg",
                    subtitle: "Try again!",
                    exp: "Somone has provided reasons for their conclusion.",
                    next: "Try Again"
                },
                {
                    title:"Out of Time",
                    score:0,
                    image: "imgs/img0.16.jpg",
                    subtitle:"Sorry.",
                    exp:"No star, but go ahead and give it another shot. You got this!",
                    next:"Try Again"
                },
            ]
        },
        {
            question: "Question 2: Who is making a good argument?",
            answers:[
                {
                    title: "That's Incorrect.",
                    score:0,
                    image: "imgs/img0.17.jpg",
                    subtitle: "Try again!",
                    exp: "Brother is not making an argument! He is making a <strong>Gambler\’s Fallacy</strong><br>"+
                    "<br><strong>Gambler’s Fallacy:</strong> The fact that an event has happened more in the past, does not mean that it is more likely to happen in the future!",
                    next: "Try Again"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    image: "imgs/img0.17.jpg",
                    subtitle: "Try again!",
                    exp: "Sister has not provided a reason that supports her conclusion. She is making a <strong>Begging the Question</strong>fallacy<br>"+
                    "<br><strong>Begging the Question:</strong> The thing that you are trying to prove is already assumed to be true, so you are not actually adding anything to the argument.",
                    next: "Try Again"
                },
                {
                    title: "That's Correct!",
                    score:1,
                    image: "imgs/img0.18.jpg",
                    subtitle: "You earned a star! Nice job!",
                    exp: "Neither of them have provided a reason that supports their conclusion.",
                    next: "Next Story!"
                },
                {
                    title:"Out of Time",
                    score:0,
                    image: "imgs/img0.16.jpg",
                    subtitle:"Sorry.",
                    exp:"No star, but go ahead and give it another shot. You got this!",
                    next:"Try Again"
                },
            ]
        },
        {
            question: "Question 3: Who is making a good argument?",
            answers:[
                {
                    title: "That's Correct!",
                    score:1,
                    image: "imgs/img0.18.jpg",
                    subtitle: "You earned a star! Nice job!",
                    exp: "Brother has provided both a reason and a conclusion",
                    next: "Next Story!"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    image: "imgs/img0.17.jpg",
                    subtitle: "Try again!",
                    exp: " Sister is trying to make her brother feel bad and give in to her. She is making an <strong>Appeal to Emotion</strong><br>"+
                    "<br><strong>Appeal to Emotion:</strong>An appeal to emotion is not an argument! It\'s when you attempt to manipulate an emotional response instead of a valid or compelling argument.",
                    next: "Try Again"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    image: "imgs/img0.17.jpg",
                    subtitle: "Try again!",
                    exp: "Somone has provided reasons for their conclusion.",
                    next: "Try Again"
                },
                {
                    title:"Out of Time",
                    score:0,
                    image: "imgs/img0.16.jpg",
                    subtitle:"Sorry.",
                    exp:"No star, but go ahead and give it another shot. You got this!",
                    next:"Try Again"
                },
            ]
        },
        {
            question: "Question 4: Who is making a good argument?",
            answers:[
                {
                    title: "That's Incorrect.",
                    score:0,
                    image: "imgs/img0.17.jpg",
                    subtitle: "Try again!",
                    exp: "Brother has not provided a legitimate reason that supports his conclusion. He is making an unreasonable <strong>Appeal to Authority</strong><br>"+
                    "<br><strong>Appeal to Authority:</strong> an appeal to authority claims something must be true because someone in 'power' says it.",
                    next: "Try Again"
                },
                {
                    title: "That's Correct!",
                    score:1,
                    image: "imgs/img0.18.jpg",
                    subtitle: "You earned a star! Nice job!",
                    exp: "Sister has provided reasons for her conclusion.",
                    next: "Next"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    image: "imgs/img0.17.jpg",
                    subtitle: "Try again!",
                    exp: "Somone has provided reasons for their conclusion.",
                    next: "Try Again"
                },
                {
                    title:"Out of Time",
                    score:0,
                    image: "imgs/img0.16.jpg",
                    subtitle:"Sorry.",
                    exp:"No star, but go ahead and give it another shot. You got this!",
                    next:"Try Again"
                },
            ]
        },
    ],
    time_out:[
        {
            title:"Out of Time",
            score:0,
            image: "imgs/img0.16.jpg",
            subtitle:"Sorry.",
            exp:"No star, but go ahead and give it another shot. You got this!",
            next:"Try Again"
        },
    ],
}

function recall_question(){
    document.querySelector(".questions").style.display = "flex";
    document.querySelector(".question").innerHTML = quiz_data.questions[quiz_data.questionNum].question;
}


// answers
function check_answer(answerNum){
    timer_stop();
    document.querySelector(".answers_overlay").style.display = "flex";
    document.querySelector(".answers_title").innerHTML = quiz_data.questions[quiz_data.questionNum].answers[answerNum].title;
    document.querySelector(".answers_image").src = quiz_data.questions[quiz_data.questionNum].answers[answerNum].image;
    document.querySelector(".answers_subtitle").innerHTML = quiz_data.questions[quiz_data.questionNum].answers[answerNum].subtitle;
    document.querySelector(".answers_exp").innerHTML = quiz_data.questions[quiz_data.questionNum].answers[answerNum].exp;
    document.querySelector(".buttons_next").innerHTML = quiz_data.questions[quiz_data.questionNum].answers[answerNum].next;

    if(quiz_data.questions[quiz_data.questionNum].answers[answerNum].score === 1){
        if(quiz_data.secondTry === true){
            document.querySelector(".buttons_next").style.display = "flex";
            document.querySelector(".buttons_again").style.display = "none";
            document.querySelector(".answers_subtitle").innerHTML = "Nice job!";
        } else if(quiz_data.secondTry === false){
            quiz_data.scoreNum++;
            document.querySelector(".material-icons.score"+(quiz_data.scoreNum+1)).style.color = "darkorange";
            document.querySelector(".buttons_next").style.display = "flex";
            document.querySelector(".buttons_again").style.display = "none";
        }
    } else if(quiz_data.questions[quiz_data.questionNum].answers[answerNum].score === 0){
        document.querySelector(".buttons_next").style.display = "none";
        document.querySelector(".buttons_again").style.display = "flex";
        quiz_data.secondTry = true;
    } 
}

function next_story(){
    if(quiz_data.questionNum === 3){
        if(quiz_data.scoreNum < 3){
            document.querySelector(".answers_overlay").style.display = "flex";
            document.querySelector(".answers_title").innerHTML = "Sorry!";
            document.querySelector(".answers_subtitle").innerHTML = "You only earned "+(parseInt(quiz_data.scoreNum)+1)+" stars.";
            document.querySelector(".answers_exp").innerHTML = "Restart and try again.";
            document.querySelector(".buttons_next").style.display = "none";
            document.querySelector(".buttons_restart").style.display = "flex";
            document.querySelector(".answers_image_div").style.display = "flex";
            document.querySelector(".answers_image").src = "imgs/img0.19.jpg";
        }else if(quiz_data.scoreNum === 3){
            document.querySelector(".answers_overlay").style.display = "flex";
            document.querySelector(".answers_title").innerHTML = "You Win!";
            document.querySelector(".answers_subtitle").innerHTML = "You won all 4 stars";
            document.querySelector(".answers_exp").innerHTML = "Now you're an argument expert!";
            document.querySelector(".buttons_next").style.display = "none";
            document.querySelector(".buttons_restart").style.display = "flex";
            document.querySelector(".buttons_restart").innerHTML = "Home";
            document.querySelector(".answers_image_div").style.display = "flex";
            document.querySelector(".answers_image").src = "imgs/img0.20.jpg";
        } 
    } if (quiz_data.questionNum != 3){
        document.querySelector(".answers_overlay").style.display = "none";
        document.querySelector(".questions").style.display = "none";
        quiz_data.questionNum++;
        quiz_data.secondTry = false;
        progressReset();
        slider_data.sceneNum = 0;
        end_popup();
        add_menu();
        menuToggle();
        document.querySelector(".menu_resume").style.display = "none";
        }
    
}

function answers_close(){
    document.querySelector(".answers_overlay").style.display = "none";
    timer_start();
}

function restart(){
    if(quiz_data.scoreNum < 3){
        location.reload();
    } else {
        document.querySelector(".answers_overlay").style.display = "none";
        document.querySelector(".questions").style.display = "none";
        document.querySelector(".slider").style.display = "none";
        document.querySelector(".buttons_restart").style.display = "none";
        document.querySelector(".buttons_next").style.display = "flex";
        quiz_data.questionNum = 0;
        quiz_data.secondTry = false;
        quiz_data.scoreNum = -1;
        progressReset();
        slider_data.sceneNum = 0;
        end_popup();
        menuToggle();
        document.querySelector(".menu_resume").style.display = "none";   
    }
}