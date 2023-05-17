
import { makeAutoObservable } from "mobx";
import jwt_decode from 'jwt-decode';

class User
{
    user = {}

    constructor() { makeAutoObservable(this) }

    auth(jwt)
    {
        const user = jwt_decode(jwt) 
        this.user = user
        console.log('[debug]', 'user new state:', user)
    }

    check()
    {
        
    }

    get isAuth()
    {
        console.log(this.user.name)
        return this.user.name ? true : false
    }
}

export default new User()