import { observable } from 'mobx';

class ResultsStore {
  // @observable results = [];

  test = observable({
    name: "Sava Radovic",
    distance: "10k",
    pace: "5:12"
  })

}

export const resultsStore = new ResultsStore();
