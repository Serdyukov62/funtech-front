import { IUserInfo, UserCredentials } from "contracts/types/UserInfo";
import { makeAutoObservable, runInAction } from "mobx";

import { getUser, signin } from "~/utils/api";

export default class UserStore {
  user: IUserInfo | null = null;
  error: string | unknown = null;
  loggedIn: boolean = false;
  isLoading: boolean = false;
  userInfo: IUserInfo | null = null;
  userRegisterEvents: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getUserInfo = () => {
    const token = localStorage.getItem("token");
    if (token) {
      this.setUserInfo(token);
    }
  }

  setUserInfo = async (token: string | void) => {
    this.isLoading = true;
    return getUser(token)
      .then((user) => {
        runInAction(() => {
          this.isLoading = false;
          this.loggedIn = true;
          this.user = user;
        });
        return this.user;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      })
      .finally(() => runInAction(() => (this.isLoading = false)));
  };

  setSignIn = async (data: UserCredentials) => {
    this.isLoading = true;
    return signin(data)
    .then((token) => {
      localStorage.setItem("token", token);
      runInAction(() => {
        this.isLoading = false;
      });
      return token;
    })
    .catch((error) => {
      this.error = error;
      this.isLoading = false;
    })
    .finally(() => runInAction(() => (this.isLoading = false)))
      
  };

  setEmail = (data: IUserInfo) => {
    this.userInfo = data;
  };

  logOut = () => {
    this.user = null;
    this.loggedIn = false;
  };

  addUserEvents = (data: string) => {
    this.userRegisterEvents.push(data);
  };
}
