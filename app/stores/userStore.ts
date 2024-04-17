import { IUserInfo } from "contracts/types/user";
import { makeAutoObservable } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

import { getUser, signin } from "~/utils/api";

export default class UserStore {
  user: IUserInfo | null = null;
  error: string | unknown = null;
  loggedIn: boolean = false;
  isLoading: boolean = false;
  userInfo: IUserInfo | null = null;
  userRegisterEvents: string[] = [];
  firstLogin: IPromiseBasedObservable<boolean> = fromPromise(Promise.resolve(false));

  constructor() {
    makeAutoObservable(this);
  }

  getUserInfo = async (token: string) => {
    this.isLoading = true;
    Promise.resolve(getUser(token))
      .then((user) => {
        this.user = user;
        this.loggedIn = true;
      })
      .catch((err) => {
        this.error = err;
      })
      .finally(() => {
        this.isLoading = false;
      });
      return this.user
  };

  signIn = ({email, password}: {email: string, password: string}) => {
    return this.firstLogin = fromPromise(signin({email, password}));
  };

  setEmail = (data: IUserInfo) => {
    this.userInfo = data;
  };

  setUser = (data: IUserInfo) => {
    this.user = data;
  };

  logOut = () => {
    this.user = null;
    this.loggedIn = false;
  };

  addUserEvents = (data: string) => {
    this.userRegisterEvents.push(data);
  };
}
