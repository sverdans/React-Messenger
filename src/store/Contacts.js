import { makeAutoObservable } from 'mobx'

class Contacts
{
    users = {}

    constructor() { makeAutoObservable(this) }

    connected(user)
    {
        console.log('[debug]', "contacts add new user:", user)
        this.users[user.id] = user
    }

    disconnected(user)
    {
        this.users[user.id] = user
    }

    init(users)
    {
        console.log('[debug]', "all users:", users)
        this.users = users
    }
}

export default new Contacts()
