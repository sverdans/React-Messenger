
import { makeAutoObservable } from "mobx";
import jwt_decode from 'jwt-decode';

class User
{
    user = {}

    constructor() 
    {
        makeAutoObservable(this)
    }

    auth(jwt)
    {
        this.user = jwt_decode(jwt)
        console.log('[debug]', 'user new state:', this.user)
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