const quizForm = document.querySelector(".quiz-form");
const bazingaBtn = document.querySelector("#bazinga-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["CALTECH", "soft" , "asymmetry" , "cello" , "pasadena"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputEl.innerText = "Your score is " + score;

}

bazingaBtn.addEventListener('click', calculateScore);