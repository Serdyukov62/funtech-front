import { makeAutoObservable } from 'mobx';
import {IEvent} from '../../contracts/types/event'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getFutureEvents, getPastEvents } from '~/utils/api';

class EventsStore {
    events?: IPromiseBasedObservable<IEvent[]>
    futureEvents?: IPromiseBasedObservable<IEvent[]>
    pastEvents?: IPromiseBasedObservable<IEvent[]>
    event?: IEvent;

    constructor() {
        makeAutoObservable(this);
    }

    getFutureEventsAction =  () => {
        this.futureEvents = fromPromise(getFutureEvents());
    }

    getPastEventsAction =  () => {
        this.pastEvents = fromPromise(getPastEvents());
    }

    setEvent = (event:IEvent) => {
        this.event = event;
    }
}

export default new EventsStore();