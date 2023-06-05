import { makeAutoObservable } from 'mobx'

class Chats
{
    chats = []
    current = {}

    constructor() { makeAutoObservable(this) }

    setCurrent(chat)
    {
        console.log('[debug]', 'Chats::setCurrent', chat)
        this.current = chat
    }

    // при получение чата ( из списка пользователей НЕ себя ) добавить в chats[n].user собеседника 
    setChats(chats)
    {
        console.log('[debug]', 'Chats::setChats', chats)
        this.chats = chats
    }
}

const chats = new Chats()
export default chats
