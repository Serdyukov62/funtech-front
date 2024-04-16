import { IUserInfo } from "contracts/types/user";
import {  makeAutoObservable } from "mobx";

import { getUser } from "~/utils/api";

export default class UserStore {
  user: IUserInfo | null = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getUserInfo = async (token: string) => {
    this.isLoading = true;
    this.user = await getUser(token);
    this.isLoading = false;
    return this.user;
  };

  get isLoggedIn() {
    return !!this.user;
  }
}
