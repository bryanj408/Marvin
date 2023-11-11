//ternary operator  everydayBackpack.lidOpen ? "open" : "closed"

const welcomeMessage = document.querySelector(".welcome-message");
const questionElement = document.querySelector(".questions");
const answerElement = document.querySelector(".answers");

const helloEarth = ["Hello, my operating name is Marvin.", 
                    "Our species have observed you for over a milenia", 
                    "and I want to ask you a few questions...", 
                    "We're trying to better understand the human race.", 
                    "So for in the name of what you humans call, Science...",
                    "Here are a few questions we have left."];

const questions = [
    { q: "Who would win in a fight: A Gorilla or a Grizzly Bear?", a: ["Gorilla", "Grizzly Bear"]},
    { q: "Apple or Android?", a: ["Apple", "Android"]},
    { q: "Would you rather have no arms or no legs?", a: ["No Arms", "No Legs"]},
    { q: "Is GIF pronounced \"GIF\" or \"JIF\"?", a: ["GIF", "JIF"]},
    { q: "Would you rather be blind or deaf?", a: ["Blind", "Deaf"]},
    { q: "Would you rather be able to fly or breath under water?", a: ["Fly", "Breath"]},
    { q: "Would you rather have a knife when you need a spoon or a spoon when you need a knife?", a: ["Knife", "Spoon"]},
    { q: "What is the Answer to the ultimate question of Life, the universe, and everything?", a: ["Infinity", 42, "Football"]}
];

const goodbyeEarth = ["By the way, the answer to question 1 is definitely the Grizzly Bear."]

//types out messages grabbed from messages[] with timeout between characters in array of strings
const typingText = (elem, txt, done = () => {}) => {
    let i = 0;
    elem.textContent = ""; //Clear before typing
    const next = () => {
        elem.textContent += txt[i];
        if(i === txt.length - 1) 
        return done();
        i += 1;
        setTimeout(next, 30);
    };
    next(); //Start
};

//pulls in typingText() and sets a 2 second timeout between strings in array
const typingArray = (elem, arr, done = () => {}) => {
    let i = 0;
    const next = () => {
        typingText(elem, arr[i], () => {
            if(i === arr.length - 1)
            return done();
            i += 1;
            setTimeout(next, 2000);
        });    
    };
    next(); //Start
}
// //calls typingArray() and clears final intro messages before questions
typingArray(welcomeMessage, helloEarth, () => {
    console.log("All Done!"); 
    setTimeout(() => {
        welcomeMessage.textContent = "";
    }, 2000);
});

//creates the buttons in the .answers area according to the passed answers
const createAnswerButtons = (answers, callback) => {
    answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer; 
        button.onclick = callback;
        answerElement.append(button);
    });
};

const processQuestions = (questions, index = 0) => {
    //if there are no more questions
    if (index >= questions.length) {
        console.log("All questions complete");
        return;
    }
    //get the current question according to the index
    const currentQuestion = questions[index];

    //instructs typingText() to start typing the current question
    typingText(questionElement, currentQuestion.q, () => {
        //when typing has finished, create and show corresponding buttons 
        createAnswerButtons(currentQuestion.a, () => {
            //clears the area and passes to the next questions
            questionElement.textContent = "";
            answerElement.textContent = "";
            processQuestions(questions, index + 1);
        });
    });
};
setTimeout(() => {
    processQuestions(questions);
}, 22500);

typingArray(welcomeMessage, goodbyeEarth, () => {
    console.log("All Done!"); 
    setTimeout(() => {
        welcomeMessage.textContent = "";
    }, 2000);
});








//Old code that may be reused

// let buttonOne = document.createElement("button");
// buttonOne.classList.add("buttonOne-class");
// buttonOne.setAttribute("id", "button");
// buttonOne.textContent = ""
// body.append(buttonOne);

// let buttonTwo = document.createElement("button");
// buttonTwo.classList.add("buttonTwo-class");
// buttonTwo.setAttribute("id", "button");
// buttonTwo.textContent = ""
// body.append(buttonTwo);