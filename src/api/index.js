import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_KEY, { autoConnect: true });

socket.onAny((event, ...args) => { console.log('[debug]', event, args) });

export default socket;
