const quizData = [
    {
        question: "What is the capital of France?",
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Rome",
        correct: "b",
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "Mark Twain",
        c: "J.K. Rowling",
        d: "Stephen King",
        correct: "a",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Venus",
        d: "Jupiter",
        correct: "b",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Leonardo da Vinci",
        b: "Pablo Picasso",
        c: "Vincent van Gogh",
        d: "Michelangelo",
        correct: "a",
    },
    {
        question: "What is the chemical symbol for water?",
        a: "Wt",
        b: "H2O",
        c: "Co",
        d: "Ho",
        correct: "b",
    },
    {
        question: "Who discovered penicillin?",
        a: "Alexander Fleming",
        b: "Marie Curie",
        c: "Isaac Newton",
        d: "Albert Einstein",
        correct: "a",
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        correct: "b",
    },
    {
        question: "Who is known as the father of modern physics?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Niels Bohr",
        correct: "b",
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Nauru",
        correct: "b",
    },
    {
        question: "What is the currency of Japan?",
        a: "Yuan",
        b: "Euro",
        c: "Dollar",
        d: "Yen",
        correct: "d",
    },
];

// creation of variables

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = (quizData[currentQuiz]);
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

loadQuiz();

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer ;
    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer = answerEls.id;
        }
    });
    return answer
} 

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (!answer) {
        alert("please an answer")
    }

        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        // const currentQuizData = quizData[currentQuiz]

        if(answer === quizData[currentQuiz].correct){
            alert("correct answer");
        } else{
            alert("Wrong answer")
        }

        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } 
        else if(currentQuiz < 5){
            quiz.innerHTML = 
            `<h2>You answered ${score} / ${quizData.length} questions correctly </h2>
            <h2>Failed</h2>
            <button onclick="location.reload()" >Reload</button>
            `
        } else{
            quiz.innerHTML = 
            `<h2>You answered ${score} / ${quizData.length} questions correctly </h2>
            <h2>passed</h2>
            <button onclick="location.reload()" >Reload</button>`
        }  
        
        
    
    
})


function sumArray(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num,0)
    console.log(`The sum of the numbers in the array is ${sum}`);
}
















// if nothing is selected, it should print something
// print out the wrong and correct answers

//  if (score < 5) {
//     quiz.innerHTML =`
//     <h3> you have scored less than 5</h3>
//     <h1>Fail!!!</h1>
//     `
    
// }


