import { observable } from 'mobx';

class ResultsStore {

  test1 = observable({
    date: "07 - 15 - 2018",
    distance:  "5k",
    pace: "8:53",
    time: "27:34"
  })

  test2 = observable({
    date: "06 - 24 - 2018",
    distance: "4m",
    pace: "8:53",
    time: "35:31"
  })

  test3 = observable({
    date: "04-08-2018",
    distance: "4m",
    pace: "9:13",
    time: "36:49"
  })
}

export const resultsStore = new ResultsStore();
