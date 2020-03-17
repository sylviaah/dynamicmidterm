var questions_data = {
    questionNum:-1,
    questions:[
        {
            question: "Question 1: Who is making a good argument?",
            answer1: "That's incorrect.",
            answer2: "That's Correct!",
            answer3: "That's incorrect.",
        },
        {
            question: "Question 2: Who is making a good argument?",
            answer1: "That's incorrect.",
            answer2: "That's incorrect.",
            answer3: "That's Correct!",
        },
        {
            question: "Question 3: Who is making a good argument?",
            answer1: "That's Correct!",
            answer2: "That's incorrect.",
            answer3: "That's incorrect.",
        },
        {
            question: "Question 4: Who is making a good argument?",
            answer1: "That's incorrect.",
            answer2: "That's Correct!",
            answer3: "That's incorrect.",
        },
    ] 
}

function recall_question(){
    document.querySelector(".questions").style.display = "flex";

    questions_data.questionNum++;
    document.querySelector(".question").innerHTML = questions_data.questions[questions_data.questionNum].question;
}


