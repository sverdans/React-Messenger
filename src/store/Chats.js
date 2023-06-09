import { makeAutoObservable, toJS } from 'mobx'
import { user } from 'store'

class Chats
{
    chats = []
    current = {}
    messages = []

    constructor() { makeAutoObservable(this) }

    setCurrent(chat)
    {
        console.log('[debug]', 'Chats::setCurrent', chat)
        this.current = chat
        this.messages = chat.Messages
    }

    addChat(chat)
    {
        this.chats = [...this.chats, chat]
    }

    // chat { Messages: [], user: {} }
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

    setCurrentStub(user)
    {
        console.log('[debug]', 'Chats::setCurrentStub', chats)
        this.current = { messages: [], user: user }
        this.messages = []
    }

    addMessageToChat(user, message)
    {
        console.log('[debug]', 'Chats::addMessageToChat user:', user, 'message:', message)

        for (let i = 0; i < this.chats.length; ++i)
        {
            if (this.chats[i].user.id === user.id)
            {
                console.log('я нашла')
                this.chats[i].Messages = [...this.chats[i].Messages, message]
                this.messages = [...this.chats[i].Messages]
            }
        }
    }

    getChatWithUser(userId)
    {
        for (let i = 0; i < this.chats.length; ++i)
        {
            if (this.chats[i].user.id === userId)
            {
                const result =  toJS(this.chats[i]) 
                console.log('[debug]', 'Chats::getChatWithUser chat:', result)
                return result
            }
        }
       
    }
}

const chats = new Chats()
export default chats
