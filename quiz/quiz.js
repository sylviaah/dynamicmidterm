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
                    subtitle: "Try again!",
                    exp: "Brother has not provided any reasons for his conclusion. He is making a <strong>Special Pleading</strong><br>"+
                    "<br><strong>Special Pleading:</strong> a special pleading is not a proper argument! It is a fallacy citing that there should be an exception to a general rule.",
                    next: "Try Again"
                },
                {
                    title: "That's Correct!",
                    score:1,
                    subtitle: "You earned a star! Nice job!",
                    exp: "Sister has provided reasons for her conclusion. This is a reasonable <strong>Appeal to Authority</strong><br>"+
                    "<br><strong>Appeal to Authority:</strong> an appeal to authority claims something must be true because someone in 'power' says it.",
                    next: "Next Story!"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    subtitle: "Try again!",
                    exp: "Somone has provided reasons for their conclusion.",
                    next: "Try Again"
                }
            ]
        },
        {
            question: "Question 2: Who is making a good argument?",
            answers:[
                {
                    title: "That's Incorrect.",
                    score:0,
                    subtitle: "Try again!",
                    exp: "Brother is not making an argument! He is making a <strong>Gambler’s Fallacy</strong><br>"+
                    "<br><strong>Gambler’s Fallacy:</strong> The fact that an event has happened more in the past, does not mean that it is more likely to happen in the future!",
                    next: "Try Again"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    subtitle: "Try again!",
                    exp: "Sister has not provided a reason that supports her conclusion. She is making a <strong>Begging the Question</strong>fallacy<br>"+
                    "<br><strong>Begging the Question:</strong> The thing that you are trying to prove is already assumed to be true, so you are not actually adding anything to the argument.",
                    next: "Try Again"
                },
                {
                    title: "That's Correct!",
                    score:1,
                    subtitle: "You earned a star! Nice job!",
                    exp: "Neither of them have provided a reason that supports their conclusion.",
                    next: "Next Story!"
                }
            ]
        },
        {
            question: "Question 3: Who is making a good argument?",
            answers:[
                {
                    title: "That's Correct!",
                    score:1,
                    subtitle: "You earned a star! Nice job!",
                    exp: "Brother has provided both a reason and a conclusion",
                    next: "Next Story!"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    subtitle: "Try again!",
                    exp: " Sister is trying to make her brother feel bad and give in to her. She is making an <strong>Appeal to Emotion</strong><br>"+
                    "<br><strong>Appeal to Emotion:</strong>An appeal to emotion is not an argument! It's when you attempt to manipulate an emotional response instead of a valid or compelling argument.",
                    next: "Try Again"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    subtitle: "Try again!",
                    exp: "Somone has provided reasons for their conclusion.",
                    next: "Try Again"
                },
            ]
        },
        {
            question: "Question 4: Who is making a good argument?",
            answers:[
                {
                    title: "That's Incorrect.",
                    score:0,
                    subtitle: "Try again!",
                    exp: "Brother has not provided a legitimate reason that supports his conclusion. He is making an unreasonable <strong>Appeal to Authority</strong><br>"+
                    "<br><strong>Appeal to Authority:</strong> an appeal to authority claims something must be true because someone in “power” says it.",
                    next: "Try Again"
                },
                {
                    title: "That's Correct!",
                    score:1,
                    subtitle: "You earned a star! Nice job!",
                    exp: "Sister has provided reasons for her conclusion.",
                    next: "Next Story!"
                },
                {
                    title: "That's Incorrect.",
                    score:0,
                    subtitle: "Try again!",
                    exp: "Somone has provided reasons for their conclusion.",
                    next: "Try Again"
                }
            ]
        },
    ]
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
    document.querySelector(".answers_overlay").style.display = "none";
    document.querySelector(".questions").style.display = "none";
    quiz_data.questionNum++;
    quiz_data.secondTry = false;
    progressReset();
    slider_data.sceneNum = 0;
    change_sli();
    change_header()
}

function answers_close(){
    document.querySelector(".answers_overlay").style.display = "none";
}