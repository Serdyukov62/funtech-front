import { makeAutoObservable } from 'mobx';
import {IEvent, Subevent} from '../../contracts/types/event'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getEvent, getFutureEvents, getPastEvents } from '~/utils/api';

class EventsStore {
    events?: IPromiseBasedObservable<IEvent[]>
    futureEvents?: IPromiseBasedObservable<IEvent[]>
    pastEvents?: IPromiseBasedObservable<IEvent[]>
    event?: IPromiseBasedObservable<IEvent>;
    subevent?: IPromiseBasedObservable<Subevent>

    constructor() {
        makeAutoObservable(this);
    }

    getFutureEventsAction =  () => {
        this.futureEvents = fromPromise(getFutureEvents());
    }

    getPastEventsAction =  () => {
        this.pastEvents = fromPromise(getPastEvents());
    }

    setEvent = (id: string | undefined) => {
        this.event = fromPromise(getEvent(id));
    }

    setSubEvent = (id: string | undefined) => {
        this.subevent = fromPromise(getEvent(id));
    }
}

export default new EventsStore();