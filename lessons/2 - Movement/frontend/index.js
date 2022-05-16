import io from 'socket.io-client';

const socket = io('http://localhost:6767');

const buttons = document.querySelectorAll('[data-command]');

function sendCommand() {
    console.log(this.dataset.command);
    const command = this.dataset.command;
    socket.emit('command', command);
}

buttons.forEach(button => button.addEventListener('click', sendCommand));