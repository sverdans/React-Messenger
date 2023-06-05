import { io } from 'socket.io-client'
import { contacts, chats } from 'store'

const socket = io(process.env.REACT_APP_API_KEY, { autoConnect: true });

socket.onAny((event, ...args) => { console.log('[debug]', 'socket.onAny', 'event:', event, 'args:', args) })

socket.on('message', ({ event, data }) => 
{
    console.log('[debug]', event, data)
    switch (event)
    {
        case 'allUsers':  contacts.init(data.users);        break;
        case 'online':    contacts.connected(data.user);    break;
        case 'offline':   contacts.disconnected(data.user); break;
        case 'userChats': chats.setChats(data.chats);       break;
        default: break;
    }
})

export default socket
