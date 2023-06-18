import { makeAutoObservable, toJS } from 'mobx'
import { user } from 'store'

class Chats
{
    chats = []
    current = {}
    messages = []

    constructor() { makeAutoObservable(this) }

    SortChats()
    {
        this.chats.sort((a, b) => {
            const aTime = a.Messages[a.Messages.length - 1].createdAt 
            const bTime = b.Messages[b.Messages.length - 1].createdAt 
            return (aTime < bTime)
        })
    }

    // chat must be { Messages: [], user: {} }
    chatInit(chat)
    {
        const companion = chat.Users[0].id === user.user.id ? chat.Users[1] : chat.Users[0]
        chat.user = companion
        chat.Messages.sort((a, b) => (a.createdAt > b.createdAt))
        delete chat.Users;
        return chat
    }

    setCurrent(chat)
    {
        console.log('[debug]', 'Chats::setCurrent', chat)
        this.current = chat
        this.messages = chat.Messages
    }

    addChat(chat)
    {
        console.log('[debug]', 'Chats::addChat chat : ', chat)
        const newChat = this.chatInit(chat)
        this.chats = [ ...this.chats, newChat ]
        console.log('[debug]', 'Chats::addChat chats[] :', toJS(this.chats))
        
        this.SortChats()
        return newChat
    }

    setChats(chats)
    {
        console.log('[debug]', 'Chats::setChats', chats)
        const newChats = chats.map(chat => ( this.chatInit(chat) ))
        this.chats = newChats

        this.SortChats()
    }

    setCurrentStub(user)
    {
        console.log('[debug]', 'Chats::setCurrentStub user:', toJS(user))
        this.current = { messages: [], user: user }
        this.messages = []
    }

    addMessageToChat(chat, message)
    {
        console.log('[debug]', 'Chats::addMessageToChat chat:', chat, 'message:', message)

        for (let i = 0; i < this.chats.length; ++i)
        {
            if (this.chats[i].id === chat.id)
            {
                this.chats[i].Messages = [...this.chats[i].Messages, message]
                this.SortChats()

                if (this.current.id === chat.id)
                    this.messages = [...this.chats[i].Messages]
                    
                return
            }
        }
    }

    // user must be !== host
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
