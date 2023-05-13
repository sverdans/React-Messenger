
import { makeAutoObservable } from "mobx";

class User
{
    user = {}

    constructor() 
    {
        makeAutoObservable(this)
    }

    signIn(user)
    {
        this.user = user
        console.log(this.user)
    }

    signUp()
    {
        this.user = {}
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