import { observable, action } from 'mobx';
import axios from 'axios';

class ResultsStore {

  @observable myRaceResults =  {};
  @observable runnerSearchResults = {};
  @observable runnerRaceResults = {};

  @observable user = {
    fullName: null,
    birthDate: null,
    runnerId: null
  };

  @action updateUser(key, value) {
    this.user[key] = value
  }

  @action updateDate(date) {
    this.user.birthDate = date._i;
  }

  domain = "http://localhost:3001/api/";

  @observable @action myRacesApi = async () => {
    let url = "http://localhost:3001/api/races/me";
    let runnerResponse = {};
    await axios.get(url)
    .then(async function(response) {
    runnerResponse = await response;
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    })
    this.myRaceResults = await runnerResponse;
    }

    @observable @action runnersSearchApi = async () => {
    let url = "http://localhost:3001/api/runners/search";
    let postBody = {
      fullName:this.user.fullName
    }
    let runnerResponse = {};
    await axios.post(url, postBody)
      .then(async function (response) {
        runnerResponse = await response;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    this.runnerSearchResults = await runnerResponse.data.response.items;
  }

  @observable @action racesApi = async () => {
    let url = "http://localhost:3001/api/runners/races";
    let postBody = {
      runnerId: this.user.runnerId
    }
    let runnerResponse = {};
    await axios.get(url, postBody)
      .then(async function (response) {
        runnerResponse = await response;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    this.runnerRaceResults = await runnerResponse.data.response.items;
  }
}

export const resultsStore = new ResultsStore();
