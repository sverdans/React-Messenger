
import { makeAutoObservable } from "mobx";

class User
{
    user = {}

    constructor() 
    {
        makeAutoObservable(this)
    }

    auth(user)
    {
        this.user = user
    }

    logOut()
    {
        this.user = {}
    }

    get isAuth()
    {
        return this.user.name ? true : false
    }
}

export default new User()