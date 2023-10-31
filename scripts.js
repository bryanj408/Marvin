const body = document.querySelector("body");

//populates welcome message after initial load of browser
//typingEffect() iterates through text string and uses setTimeout to pause between characters 

const welcomeMessage = document.querySelector("div");
const text = "Welcome to your new chatBuddy!";
const typingEffect = (element, text, i = 0) => {
    element.textContent += text[i];
    
    if (i === text.length - 1) {
        return;
    }
    setTimeout(() => typingEffect(welcomeMessage, text, i + 1), 50);
}
typingEffect(welcomeMessage, text);


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
