const questions =[
    {
    questions: 'which is the larget animal in the world ',
    answer : [
        {text : 'shark',correct : false },
        {text : 'blue whale',correct : true  },
        {text : 'elephant',correct : false },
        {text : 'dog',correct : false }
    ]
},
 
{
    questions: 'which is the small country in the world ',
    answer : [
        {text : 'bangladesh',correct : true },
        {text : 'Bhutan',correct : false  },
        {text : 'Nepal',correct : false },
        {text : 'Banglor',correct : false }
    ]
},
{
    questions: 'which is the larget animal in the world ',
    answer : [
        {text : 'Kalahari',correct : false },
        {text : 'Gobi',correct : false  },
        {text : 'sahara',correct : false },
        {text : 'Antarctica',correct : true }
    ]
},
{
    questions: 'which is the smallest continent in the world ',
    answer : [
        {text : 'Asia',correct : false },
        {text : 'Australia',correct : true  },
        {text : 'Arctic',correct : false },
        {text : 'Africa',correct : false }
    ]
},


];
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionsIndex = 0 ;
let score = 0 ;

function startQiz(){
    currentQuestionsIndex = 0 ;
    score = 0 ;
    nextButton.innerText = 'Next';
    showQestions();
}
function showQestions(){
   resetState();
   let  currentQuestions = questions[currentQuestionsIndex];
   let questionsNo = currentQuestionsIndex + 1 ;
   questionElement.innerHTML = questionsNo + '.' + currentQuestions.questions ; 
   

   //display button in answer text 
   currentQuestions.answer.forEach( answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text
    button.classList.add('btn');
    answerButton.appendChild(button);
    if (answer.correct){
        button.dataset.correct = answer.correct ;
    }
    button.addEventListener('click',selectAnswer)
   })
}
function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === 'true' ;
    if(isCorrect){
        selectButton.classList.add('correct');
        score ++ ;
    }
    else{
        selectButton.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach( button => {
        if (button.dataset.correct === 'true' ){
            button.classList.add('correct');
        }
        button.disabled = true ;
    });
    nextButton.style.display = 'block';
}
function showScore(){
    resetState();
    questionElement.innerHTML=  ` you score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'play Again';
    nextButton.style.display = 'block';
}


function handelNextButton(){
    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length){
        showQestions();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener('click', ()=> {
    if (currentQuestionsIndex < questions.length){
        handelNextButton();
    }
    else{
        startQiz();
    }
})
startQiz();