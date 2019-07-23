import { observable } from 'mobx';

class ResultsStore {

  @observable results =  {};

  @observable test1 = {
    date: "07 - 15 - 2018",
    distance:  "5k",
    pace: "8:53",
    time: "27:34"
  }

  @observable test2 = {
    date: "06 - 24 - 2018",
    distance: "4m",
    pace: "8:53",
    time: "35:31"
  }

  @observable test3 = {
    date: "04-08-2018",
    distance: "4m",
    pace: "9:13",
    time: "36:49"
  }
}

export const resultsStore = new ResultsStore();
