import {io} from 'socket.io-client';

let socket;

export const intiateSocketConnection = (email)=>{
    socket = io(process.env.REACT_APP_SOCKET_ENDPOINT);
    socket.emit('join',{email:email});
    console.log(`Connecting socket...`);
    socket.on('user-joined',(msg)=>{
        alert(msg);
    })
    
    
}
export const sendRequest = (data)=>{
    console.log(data);
    socket.emit('sentRequest',data);

}
export const Listen = ()=>{
    console.log('socket user is listening for server');
    socket.on('recieveRequest',(data)=>{
        alert(`${data.Name} has sent you friendRequest`);
    })
    
}
export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
  }