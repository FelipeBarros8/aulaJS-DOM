const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const change = document.getElementById('change');


function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}


function lampOn () {
    if (!isLampBroken()){
    lamp.src='./img/ligada.jpg'
    }
}

function lampOff () {
    if(!isLampBroken()) {
        lamp.src='./img/desligada.jpg'
    }
}

function LampBroken() {
    return lamp.src='./img/quebrada.jpg'
}

function toreplace() {
    return lamp.src='./img/desligada.jpg'
}


change.addEventListener('click', toreplace);

lamp.addEventListener('dblclick', LampBroken);

turnOn.addEventListener('click', lampOn);

turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);

lamp.addEventListener('mouseleave', lampOff);