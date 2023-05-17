import { makeAutoObservable } from 'mobx'

class Chats
{
    chats = []

    constructor() { makeAutoObservable(this) }

}

