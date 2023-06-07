import { makeAutoObservable } from 'mobx'
import { user } from 'store'

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

        chats.forEach(chat => {
            const companion = chat.Users[0].id === user.user.id ? chat.Users[1] : chat.Users[0]
            console.log(companion)
            chat.Users = undefined
            chat.user = companion
            console.log(chat)
        })
        this.chats = chats
    }
}

const chats = new Chats()
export default chats
