import { makeAutoObservable } from 'mobx';
import {IEvent} from '../../contracts/types/event'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getFutureEvents, getPastEvents } from '~/utils/api';

class EventsStore {
    events?: IPromiseBasedObservable<IEvent[]>
    futureEvents?: IPromiseBasedObservable<IEvent[]>
    pastEvents?: IPromiseBasedObservable<IEvent[]>

    constructor() {
        makeAutoObservable(this);
    }

    getFutureEventsAction =  () => {
        this.futureEvents = fromPromise(getFutureEvents());
    console.log(this.futureEvents)

    }

    getPastEventsAction =  () => {
        this.pastEvents = fromPromise(getPastEvents());
    }
}

export default new EventsStore();