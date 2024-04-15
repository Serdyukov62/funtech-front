import { IUserInfo } from "contracts/types/user";
import { makeAutoObservable } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { getUser } from "~/utils/api";

interface UserInfo{
    user: IUserInfo
}


class UserStore {
    userInfo?: IPromiseBasedObservable<UserInfo>;
    isLoggedIn: boolean = false;

    constructor(){
        makeAutoObservable(this);
    }

    getUserInfo = (token: string) => {
        this.userInfo = fromPromise(getUser(token));
    }

    loggedIn = () => {
        this.isLoggedIn = true;
    }
    
}

export default new UserStore();