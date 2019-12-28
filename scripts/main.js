/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Look At My Stupid Kid Via JS!';*/

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/micah.jpeg') {
        myImage.setAttribute ('src', 'images/ice-cube.jpg');
    } else {
        myImage.setAttribute ('src', 'images/micah.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Micah sucks, ' + myName;
    }
  }
  

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Micah sucks, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}