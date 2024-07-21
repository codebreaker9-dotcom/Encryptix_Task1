const display =document.getElementById("display");

function appendToDisplay(answer) {
    display.value += answer;
}

function clearDisplay() {
    display.value = "";
}


function deleteLastCharacter() {
    display.value = display.value.slice(0 , -1);
}

function  CalculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) { 
        alert("Invalid calculation , try again")
        
    }
}