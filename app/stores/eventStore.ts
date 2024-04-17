import { action, makeAutoObservable, observable } from 'mobx';
import {IEvent, Subevent} from '../../contracts/types/event'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getEvent, getFutureEvents, getPastEvents } from '~/utils/api';

export default class EventsStore {

    events?: IPromiseBasedObservable<IEvent[]>
    futureEvents?: IPromiseBasedObservable<IEvent[]>
    pastEvents?: IPromiseBasedObservable<IEvent[]>
    event?: IPromiseBasedObservable<IEvent>;
    subevent?: IPromiseBasedObservable<Subevent>

    constructor() {
        makeAutoObservable(this, {
            events: observable,
            futureEvents: observable,
            pastEvents: observable,
            event: observable,
            subevent: observable, 
            getFutureEventsAction: action,
            getPastEventsAction: action,
            setEvent: action,
            setSubEvent: action
        });
    }

    getFutureEventsAction =  () => {
        this.futureEvents = fromPromise(getFutureEvents());
    }

    getPastEventsAction =  () => {
        this.pastEvents = fromPromise(getPastEvents());
    }

    setEvent = (id: string | undefined, token: string) => {
        this.event = fromPromise(getEvent(id, token));
    }

    setSubEvent = (id: string | undefined) => {
        this.subevent = fromPromise(getEvent(id));
    }

}
