const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/perimetro-2.png") {
    myImage.setAttribute("src", "images/wiwi-cat-icon.png");
  } else {
    myImage.setAttribute("src", "images/perimetro-2.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Wiwi is cool, ${myName}`;
    }
  }  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Wiwi is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
