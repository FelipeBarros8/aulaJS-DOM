const turnOn = document.getElementById('Noite');
const turnOff = document.getElementById('Manhã');
const lamp = document.getElementById('main');

function lampOn () {
    lamp.classList.add('Noite')
    lamp.classList.remove('Manha')
}

function lampOff () {
        lamp.classList.add('Manha')
        lamp.classList.remove('Noite')
    }

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)