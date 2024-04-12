import eventStore from "./eventStore";
import userStore from "./userStore";

class RootStore {
    user = userStore;
    events = eventStore;
}

export default RootStore;