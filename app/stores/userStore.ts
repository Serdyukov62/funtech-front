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
  firstLogin: IPromiseBasedObservable<boolean> = fromPromise(
    Promise.resolve(false)
  );

  constructor() {
    makeAutoObservable(this);
  }

  getUserInfo = async (token: string) => {
    try {
      this.isLoading = true;
      const user = await getUser(token).then((user) => {
        return user;
      })
      this.user = user;
      return this.user
    } catch (error) {
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  };

  setEmail = (data: IUserInfo) => {
    this.userInfo = data;
  };

  setUser = (data: IUserInfo) => {
    return (this.user = data);
  };

  logOut = () => {
    this.user = null;
    this.loggedIn = false;
  };

  addUserEvents = (data: string) => {
    this.userRegisterEvents.push(data);
  };
}
