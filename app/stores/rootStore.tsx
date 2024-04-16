import { makeAutoObservable, observable } from "mobx";
import EventsStore from "./eventStore";
import UserStore from "./userStore";

export class RootStore {
    userStore: UserStore;
    eventStore: EventsStore;

    constructor() {
        this.userStore = new UserStore();
        this.eventStore = new EventsStore();
        makeAutoObservable(this, {
            userStore: observable,
            eventStore: observable,
        });
    }
}

const store = new RootStore()

export default store;