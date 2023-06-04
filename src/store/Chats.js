import { makeAutoObservable } from 'mobx'

class Chats
{
    chats = []
    current = {}

    constructor() { makeAutoObservable(this) }

    setCurrentChat(chat)
    {

    }

    // при получение чата ( из списка пользователей НЕ себя ) добавить в chats[n].user собеседника 
    setChats(chats)
    {
        console.log('[debug]', 'User chats:', chats)
    }
}

const chats = new Chats()
export default chats;