mudarCor('center');
addRed();
addGreen();
addBlue();
function left() {
    
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    var align = document.querySelector("#texto");
    align.setAttribute('style', `text-align: left; color: rgb(${red},${green},${blue})`);
}
function center() {
    
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    var align = document.querySelector("#texto");
    align.setAttribute('style', `text-align: center; color: rgb(${red},${green},${blue})`);
}
function right() {
    
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    var align = document.querySelector("#texto");
    align.setAttribute('style', `text-align: right; color: rgb(${red},${green},${blue})`);
}

function addRed() {
    var align = document.querySelector('#texto').style.textAlign;
    var red = document.getElementById('red');
    var redNumber = document.getElementById('numberRed')
    redNumber.innerHTML = red.value;
    mudarCor(align);
}
function addGreen() {
    var align = document.querySelector('#texto').style.textAlign;
    var green = document.getElementById('green');
    var greenNumber = document.getElementById('numberGreen')
    greenNumber.innerHTML = green.value;
    mudarCor(align);
}
function addBlue() {
    var align = document.querySelector('#texto').style.textAlign;
    var blue = document.getElementById('blue');
    var blueNumber = document.getElementById('numberBlue')
    blueNumber.innerHTML = blue.value;
    mudarCor(align);
}

function mudarCor(align) {
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;

    var texto = document.querySelector('#texto');
    texto.setAttribute('style', `color: rgb(${red},${green},${blue}); text-align: ${align}`);
}