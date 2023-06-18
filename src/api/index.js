import { io } from 'socket.io-client'
import { contacts, chats } from 'store'

const socket = io(process.env.REACT_APP_API_KEY, { autoConnect: true });

socket.onAny((event, ...args) => { console.log('[debug]', 'socket.onAny', 'event:', event, 'args:', args) })

socket.on('message', ({ event, data }) => 
{
    console.log('[debug]', event, data)
    switch (event)
    {
        case 'AllUsers':              contacts.init(data.users);                 break;
        case 'SomebodyOnline':        contacts.connected(data.user);             break;
        case 'SomebodyOffline':       contacts.disconnected(data.user);          break;
        case 'SomebodyUpdateProfile': contacts.updateContact(data.user);         break; // not host

        case 'NewChat':       chats.addChat(data.chat);                          break;
        case 'UserChats':     chats.setChats(data.chats);                        break;
        case 'MessageToUser': chats.addMessageToChat(data.chat, data.message);   break;

        default: break;
    }
})

export default socket
