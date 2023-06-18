import { makeAutoObservable } from "mobx"
import jwt_decode from 'jwt-decode'

class User
{
    user = {}

    constructor() { makeAutoObservable(this) }

    auth(jwt)
    {
        const user = jwt_decode(jwt) 
        this.user = user
        console.log('[debug]', 'User::auth', user)
    }

    check()
    {
        
    }

    get isAuth()
    {
        console.log('[debug]', 'User::isAuth', this.user.name)
        return this.user.name ? true : false
    }

    Clear()
    {
        this.user = {}  
    }
}

const user = new User()
export default user
