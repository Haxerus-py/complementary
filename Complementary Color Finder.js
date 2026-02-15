"use strict";

var mainBox = document.getElementById('MainColor')
var compBox = document.getElementById('CompColor')
var buttonsDiv = document.getElementById('buttons')
let clicked = false

// Function to generate random color and its complementary colors
function generateRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    console.log(`Generated Color: ${color}`);
}

function findComplementaryColors(r, g, b) {
    // Calculate complementary colors
    const compR = 255 - r;
    const compG = 255 - g;
    const compB = 255 - b;
    let complementaryColor = `rgb(${compR}, ${compG}, ${compB})`;
    console.log(`Complementary Color: ${complementaryColor}`);
    return complementaryColor;
}

function displayRandomColors() {
    // Generate random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let mainColor = `rgb(${r}, ${g}, ${b})`;

    // Find complementary color
    let complementaryColor = findComplementaryColors(r, g, b);
    // Display colors in HTML elements
    mainBox.style.background = mainColor;
    compBox.style.background = complementaryColor;

    setColorLabels(mainColor, complementaryColor);
}

function selectColor() {
    console.log(clicked)
    if (!clicked) {
        clicked = true

        const inputR = document.createElement('input');
        inputR.setAttribute('type', 'number');
        inputR.setAttribute('placeholder', 'Enter Red Value');
        inputR.setAttribute('class', 'mode')
        buttonsDiv.appendChild(inputR);

        const inputG = document.createElement('input');
        inputG.setAttribute('type', 'number')
        inputG.setAttribute('placeholder', 'Enter Green Value');
        inputG.setAttribute('class', 'mode')
        buttonsDiv.appendChild(inputG);

        const inputB = document.createElement('input');
        inputB.setAttribute('type', 'number')
        inputB.setAttribute('placeholder', 'Enter Blue Value');
        inputB.setAttribute('class', 'mode')
        buttonsDiv.appendChild(inputB);

        const createBtn = document.createElement('button');
        createBtn.setAttribute('type', 'button');
        createBtn.setAttribute('type', 'submit');
        createBtn.textContent = 'Create Color',
        createBtn.setAttribute('class', 'mode')
        createBtn.addEventListener('click', () => {
            let compColor = findComplementaryColors(inputR.value, inputG.value, inputB.value)
            let mainColor = `rgb(${inputR.value}, ${inputG.value}, ${inputB.value})`;

            console.log(mainColor);
            mainBox.style.background = mainColor;
            compBox.style.background = compColor;

            setColorLabels(mainColor, compColor);
        });
        buttonsDiv.appendChild(createBtn);
    }

    else {
        clicked = false;
        console.log('Already in use');
        let buttons = document.getElementsByClassName('mode');
        for (var button in buttons) {
            // Button Remover
            console.log('Button removal')
            buttons[button].style.display = 'none'
        }
        return
    }
}

function setColorLabels(mainColor, compColor) {
    document.getElementById('mainLabel').textContent = 'RGB CODE :' + mainColor;
    document.getElementById('compLabel').textContent = 'RGB CODE :' + compColor;

}

// Event Listeners
document.getElementById('random').addEventListener('click', displayRandomColors)
document.getElementById('choose').addEventListener('click', selectColor)