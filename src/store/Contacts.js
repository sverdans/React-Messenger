import { makeAutoObservable } from 'mobx'

class Contacts
{
    users = {}

    constructor() { makeAutoObservable(this) }

    connected(user)
    {
        console.log('[debug]', "contacts online:", user)
        user.online = true;
        this.users[user.id] = user
    }

    disconnected(user)
    {
        console.log('[debug]', "contacts online:", user)
        user.online = false;
        this.users[user.id] = user
    }

    init(users)
    {
        console.log('[debug]', "all users:", users)
        this.users = users
    }
}

const contacts = new Contacts()
export default contacts
