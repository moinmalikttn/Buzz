import {io} from 'socket.io-client';

let socket;

export const intiateSocketConnection = ()=>{
    socket = io(process.env.REACT_APP_SOCKET_ENDPOINT);
    console.log(`Connecting socket...`);
    
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
  }