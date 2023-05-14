import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_KEY, { autoConnect: true });

socket.onAny((event, ...args) => { console.log(event, args) });

export default socket;


/*
const wsConnection = new WebSocket(process.env.REACT_APP_API_KEY);

wsConnection.onopen = function() 
{
    console.log("[debug]", "Server:", process.env.REACT_APP_API_KEY)
    console.log("[info]", "WebSocket connection opened")
}

wsConnection.onclose = (event) => 
{
    if (event.wasClean)
        console.log("[info]", "WebSocket connection closed")
	else 
        console.log("[warning]", "WebSocket connection closed")
   
    console.log("[warning]", 'Код: ' + event.code + ' причина: ' + event.reason)
}

wsConnection.onerror = (error) => 
{
    console.log("[error]", "WebSocket error:", error.message)
}

const wsSend = (data) => 
{
    console.log("[debug]", "WebSocket send data:", data)

    if(!wsConnection.readyState)
        setTimeout(() => { wsSend(data) }, 100);
	else
        wsConnection.send(data);
}

export { wsConnection, wsSend }

*/
