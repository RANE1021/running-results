import { resultsStore } from './results.store';

class MasterStore {
  constructor() {
    this.resultsStore = resultsStore;
  }
  // user = observable({ name: "my name", id: 7});
  //@observable user = "";
}

export const masterStore = new MasterStore();
