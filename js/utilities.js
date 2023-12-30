function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const input = parseFloat(inputString);
    inputField.value = '';
    return input;
}

function getTextElementById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.innerText;
    const input = parseFloat(inputString);
    return input;
}

function setElemetValueById(inputId, value) {
    const inputField = document.getElementById(inputId);
    inputField.innerText = value;
}