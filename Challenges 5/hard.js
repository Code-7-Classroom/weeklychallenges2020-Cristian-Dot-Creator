
let togglebackgroundColorRed = false;
let togglebackgroundColorWhite = true;


let backgroundColorRED = () => {
    let myBody = document.querySelector(".body");
    if(togglebackgroundColorRed === false) {
        myBody.style.background = "red";
    } 
}


let backgroundColorWHITE = () => {
    let myBody = document.querySelector(".body");
    if(togglebackgroundColorWhite === true) {
        myBody.style.background = "white";
    } 
}
