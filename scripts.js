/*
CMD + / comments out line of code
*/

const body = document.querySelector("body");
const typedMessage = document.querySelector("div");
const messageArray = [
    "Welcome to your new chatBuddy!", 
    "I want to ask you a few questions...", 
    "Some of them might be a bit crazy.", 
    "But, why not?",
];

/**
 * function typingEffect()
 * iterates through messageArray[] to type out messages
 * setTimeout feature to iterate through characters/clear text
 * @param {string} message 
 * @param {string} item
 * @param {integer} i 
 * @returns 
 */

const typingEffect = (message, item, i = 0) => {
    message.textContent += item[i];
    if (i === item.length - 1) {
        return;
    }
    setTimeout(() => { 
        typingEffect(message, item, i + 1)
    }, 30);
}

/*
    Calls typingEffect() and then goes through setTimeout() between messages.
    I wanted to call setTimeout() individually to be able to better time the length
    of each message vs. calling one setTimout within typingEffect() and repeating.
*/
typingEffect(typedMessage, messageArray[0]);
setTimeout(() => {
    typedMessage.textContent = "";
}, 3000)
setTimeout(() => {
    typingEffect(typedMessage, messageArray[1]);
}, 3100)
setTimeout(() => {
    typedMessage.textContent = "";
}, 7000)
setTimeout(() => {
    typingEffect(typedMessage, messageArray[2]);
}, 7100)
setTimeout(() => {
    typedMessage.textContent = "";
}, 11000)
setTimeout(() => {
    typingEffect(typedMessage, messageArray[3]);
}, 11100)
setTimeout(() => {
    typedMessage.textContent = "";
}, 15000)




let buttonOne = document.createElement("button");
buttonOne.classList.add("buttonOne-class");
buttonOne.setAttribute("id", "button");
buttonOne.innerHTML = "A1"
body.append(buttonOne);

let buttonTwo = document.createElement("button");
buttonTwo.classList.add("buttonTwo-class");
buttonTwo.setAttribute("id", "button");
buttonTwo.innerHTML = "A2"
body.append(buttonTwo);

let buttonThree = document.createElement("button");
buttonThree.classList.add("buttonThree-class");
buttonThree.setAttribute("id", "button");
buttonThree.innerHTML = "A3"
body.append(buttonThree);
