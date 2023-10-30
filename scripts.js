const body = document.querySelector("body");

let buttonOne = document.createElement("button");
buttonOne.classList.add("buttonOne-class");
buttonOne.setAttribute("id", "button");
buttonOne.innerHTML = "Hello"
body.append(buttonOne);

let buttonTwo = document.createElement("button");
buttonTwo.classList.add("buttonTwo-class");
buttonTwo.setAttribute("id", "button");
buttonTwo.innerHTML = "There"
body.append(buttonTwo);

let buttonThree = document.createElement("button");
buttonThree.classList.add("buttonThree-class");
buttonThree.setAttribute("id", "button");
buttonThree.innerHTML = "Guy"
body.append(buttonThree);
