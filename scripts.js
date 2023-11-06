/*
CMD + / comments out line of code
ternary operator  everydayBackpack.lidOpen ? "open" : "closed"
*/

const body = document.querySelector("body");
const element = document.querySelector("div");
const messages = ["Welcome to your new chatBuddy!", 
                  "I want to ask you a few questions...", 
                  "Some of them might be kind of weird..", 
                  "But, hey... we're pals, right?!", 
                  "After all, my name is ChatBuddy, so...let's do this!"]

const questions = ["Would you rather have no arms or no legs?", 
                   "Would you rather be able to breath under water, or be able to fly?",
                   "Would you rather be blind or deaf?",
                   "Would you rather be always hot or alwasys cold?"]

const answerOptionOne = ["No arms?!"]
const answerOptionTwo = []

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

typingArray(element, messages, () => {
    console.log("All Done!"); 
});


let buttonOne = document.createElement("button");
buttonOne.classList.add("buttonOne-class");
buttonOne.setAttribute("id", "button");
buttonOne.textContent = ""
body.append(buttonOne);

let buttonTwo = document.createElement("button");
buttonTwo.classList.add("buttonTwo-class");
buttonTwo.setAttribute("id", "button");
buttonTwo.textContent = ""
body.append(buttonTwo);

// let buttonThree = document.createElement("button");
// buttonThree.classList.add("buttonThree-class");
// buttonThree.setAttribute("id", "button");
// buttonThree.innerHTML = "A3"
// body.append(buttonThree);

const questionOne = () => {
    setTimeout(() => {
        typingEffect(typedMessage, questionArray[0]);
    }, 17000)

    buttonOne.textContent = "No Arms";
    buttonOne.addEventListener("click", () => {
        console.log("I was clicked!");

        if(buttonOne) {
            console.log("Fuck YEs");
        }

    })
    buttonTwo.textContent = "No Legs";
    buttonTwo.addEventListener("click", () => {
        console.log("No, I was clicked!");

        if(buttonTwo) {
            console.log("Holy Shit")
        }
    })
   
}
questionOne();