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
}

export const detailedResultsStore = new DetailedResultsStore();
