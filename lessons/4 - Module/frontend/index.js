import io from 'socket.io-client';

const socket = io('http://localhost:6767');

const buttons = document.querySelectorAll('[data-command]');

const text = document.querySelector('#textToDisplay');

function sendCommand() {
    console.log(this.dataset.command);
    const command = this.dataset.command;
    socket.emit('command', command);
}

function handleKey(e) {
    console.log(e.key);

    switch (e.key) {
        case " ":
            socket.emit('command', 'takeoff');
            break;
        case "l":
            socket.emit('command', 'land');
            break;
        case "0":
            socket.emit('command', 'emergency');
            break;
        case "ArrowUp":
            socket.emit('command', 'forward 50');
            break;
        case "ArrowDown":
            socket.emit('command', 'back 50');
            break;
        case "ArrowLeft":
            socket.emit('command', 'left 50');
            break;
        case "ArrowRight":
            socket.emit('command', 'right 50');
            break;
        case "w":
            socket.emit('command', 'up 50');
            break;
        case "s":
            socket.emit('command', 'down 50');
            break;
        case "a":
            socket.emit('command', 'ccw 90');
            break;
        case "d":
            socket.emit('command', 'cw 90');
            break;
        default:
            console.log('no command attached to this key');
            break;
    }
}

function removeKeyControl() {                          
    window.removeEventListener('keydown', handleKey);
}
  
function addKeyControl() {                              
    window.addEventListener('keydown', handleKey);
}

window.addEventListener('keydown', handleKey);
text.addEventListener('focus', removeKeyControl);       
text.addEventListener('blur', addKeyControl);           
buttons.forEach(button => button.addEventListener('click', sendCommand));