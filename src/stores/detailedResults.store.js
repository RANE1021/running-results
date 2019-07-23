import { observable, action } from 'mobx';

class DetailedResultsStore {

  @observable modalState = {
    show: false
  }

  @action close() {
    this.modalState.show = false;
  }

  @action open() {
    this.modalState.show = true;
  }

  @observable test1 = {
    runnerId: "18093068",
    bib: "31789",
    eventCode: "18GOAL",
    eventName: "2018 NYRR Virtual GOOAAALLL 5K",
    venue: null,
    distanceName: "5 kilometers",
    startDateTime: "2018-07-15T12:00:00",
    actualTime: "0:27:34",
    actualPace: "08:53"
  }

  @observable test2 = {
    runnerId: "17772813",
    bib: "647",
    eventCode: "AHP18",
    eventName: "2018 Achilles Hope & Possibility (4M)",
    venue: "Central Park, NYC (NY13002DK)",
    distanceName: "4 miles",
    startDateTime: "2018-06-24T09:00:00",
    actualTime: "0:35:31",
    actualPace: "08:53"
  }

  @observable test3 = {
    runnerId: "15691082",
    bib: "2862",
    eventCode: "3381",
    eventName: "2018 Boomer’s Cystic Fibrosis Run to Breathe (4M) Brought to You by UnitedHealthcare",
    venue: "Central Park, NYC (NY09003DK)",
    distanceName: "4 miles",
    startDateTime: "2018-04-08T09:00:00",
    actualTime: "0:36:49",
    actualPace: "09:13"
  }
}

export const detailedResultsStore = new DetailedResultsStore();
