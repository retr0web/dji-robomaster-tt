const dgram = require('dgram');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const throttle = require('lodash/throttle');

const PORT = 8889;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

const droneState = dgram.createSocket('udp4');
droneState.bind(8890);


drone.on('message', message => {
    console.log(`🤖 : ${message}`);
    io.sockets.emit('status', message.toString());
});

function handleError(err) {
    if (err) {
      console.log('ERROR');
      console.log(err);
    }
}

function parseState(state) {
  return state
    .split(';')
    .map(x => x.split(':'))
    .reduce((data, [key, value]) => {
      data[key] = value;
      return data;
    }, {});
}

io.on('connection', socket => {
    socket.on('command', command => {
        console.log('Command sent from browser');
        console.log(command);
        drone.send(command, 0, command.length, PORT, HOST, handleError);
    });

    socket.emit('status', 'CONNECTED');
});

droneState.on(
    'message',
    throttle(state => {
      const formattedState = parseState(state.toString());
      console.log(`
      🔋${formattedState.bat}% |
      🌡️ [Low: ${formattedState.templ}° | High: ${formattedState.temph}°]
      ${formattedState.bat > 50 ? 'Flips available' : 'Flips unavailable'}`);
      io.sockets.emit('dronestate', formattedState);
    }, 1000)
);

http.listen(6767, () => {
    console.log('Socket io server up and running');
});
