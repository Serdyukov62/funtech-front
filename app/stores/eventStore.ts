import { makeAutoObservable, runInAction } from "mobx";
import { IEvent, Subevent } from "../../contracts/types/event";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
import { getEvent, getFutureEvents, getPastEvents } from "~/utils/api";

export default class EventsStore {
  events?: IPromiseBasedObservable<IEvent[]>;
  futureEvents?: IEvent[];
  pastEvents?: IEvent[];
  event?: IPromiseBasedObservable<IEvent>;
  subevent?: IPromiseBasedObservable<Subevent>;
  isMainLoading: boolean = false;
  isloading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getFutureEventsAction = () => {
    this.isMainLoading = true;
    getFutureEvents()
      .then((events) => {
        runInAction(() => {
          this.futureEvents = events;
          this.isMainLoading = false;
        });
      })
      .finally(() =>
        runInAction(() => {
          this.isMainLoading = false;
        })
      );
  };

  getPastEventsAction = () => {
    this.isMainLoading = true;
    getPastEvents()
      .then((events) => {
        runInAction(() => {
          this.pastEvents = events;
          this.isMainLoading = false;
        });
      })
      .finally(() =>
        runInAction(() => {
          this.isMainLoading = false;
        })
      );
  };

  setEvent = (id: string | undefined, token: string | undefined) => {
    this.event = fromPromise(getEvent(id, token));
  };

  setSubEvent = (id: string | undefined) => {
    this.subevent = fromPromise(getEvent(id));
  };
}
