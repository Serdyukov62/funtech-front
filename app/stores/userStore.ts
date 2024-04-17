import { UserCredentials } from "contracts/types/UserInfo";
import { IUserInfo } from "contracts/types/user";
import { makeAutoObservable, runInAction } from "mobx";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

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

  getUserInfo = async (token: string) => {
    this.isLoading = true;
    try {
      const user = await getUser(token);
      runInAction(() => {
        this.user = user;
        this.isLoading = false;
      });
      return user;
    } catch (error) {
      this.error = error;
      this.isLoading = false;
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  };

  setSignIn = async (data: UserCredentials) => {
    this.isLoading = true;
    try {
      const token = await signin(data);
      const user = await this.getUserInfo(token);
      localStorage.setItem("token", token);
      runInAction(() => {
        this.loggedIn = true;
        this.isLoading = false;
      });
      return user;
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.isLoading = false;
      });
    } finally {
      runInAction(() => (this.isLoading = false));
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
