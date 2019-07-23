import { resultsStore } from './results.store';
import { detailedResultsStore } from './detailedResults.store'

class MasterStore {
  constructor() {
    this.resultsStore = resultsStore;
    this.detailedResultsStore = detailedResultsStore;
  }
  // user = observable({ name: "my name", id: 7});
  //@observable user = "";
}

export const masterStore = new MasterStore();
