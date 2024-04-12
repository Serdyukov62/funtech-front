import { makeAutoObservable } from "mobx";

interface UserInfo{
    id: number,
    name: string,
    email: string,
    isLoggedIn: boolean,
}


class UserStore {
    userInfo = {
        id: 0,
        name: '',
        isLoggedIn: false,
    }

    constructor(){
        makeAutoObservable(this);
    }

    setUserInfo(userInfo: UserInfo){
        this.userInfo = userInfo;
    }

    getUserInfo = async () => {
        const res = await fetch('http://funtech.b2k.me:8000/api/v1/users/me/', {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        });
        const data = await res.json();
        this.setUserInfo(data);
    }
    
}

export default new UserStore();