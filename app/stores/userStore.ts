import { Subevent } from "contracts/types/event";
import { IUserInfo } from "contracts/types/user";
import {  makeAutoObservable } from "mobx";

import { getUser } from "~/utils/api";

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
    getUser(token)
      .then((user) => {
        this.loggedIn = true;
        this.user = user;
        this.firstLogin();
      })
      .catch((err) => {
        this.error = err;
      })
      .finally(() => {
        this.isLoading = false;
      });
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

  firstLogin = () => {
    return true;
  };

  addUserEvents = (data: string) => {
    this.userRegisterEvents.push(data);
  };

}
