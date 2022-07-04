const express = require('express');
const cors = require('cors');
const requestPromise = require('request-promise');
const parser = require('body-parser');

const app = express();
app.use(cors());
app.use(parser.json())
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));

app.get("/api/races/me", async (req, res) => {
  const runnerId = "18093068"
  res.json(await getRaces(runnerId));
});

app.post("/api/runners/search", async (req, res) => {
  let user = req.body.fullName;
  console.log("body from post: ", req.body.fullName)
  res.json(await getRunnersByName(user));
});

app.get("/api/runners/races", async (req, res) => {
  let runnerId = req.body.runnerId;
  res.json(await getRaces(runnerId));
});

// function getHeaders()

async function getRunnersByName(user) {
  let nyrrResponse = {};
  const options = {
    headers: {
      "Content-type": "application/json",
      token: "898d6b6aef0e4887"
    },
    method: "POST",
    uri: "https://results.nyrr.org/api/runners/search",
    body: {
      pageIndex: 1,
      pageSize: 51,
      searchString: user,
      sortColumn: null,
      sortDescending: false
    },
    json: true
  };
  try {
    console.log(options);
    const response = await requestPromise(options);
    nyrrResponse = await response;
  } catch (error) {
    console.log(error)
  }
  return await nyrrResponse;
};

async function getRaces(runnerId) {
  let nyrrResponse = {};
  const options = {
    headers: {
      "Content-type": "application/json",
      token: "898d6b6aef0e4887"
    },
    method: "POST",
    uri: "https://results.nyrr.org/api/runners/races",
    body: {
      distance: null,
      pageIndex: 1,
      pageSize: 51,
      runnerId: runnerId,
      searchString: null,
      sortColumn: "EventDate",
      sortDescending: true,
      year: null
    },
    json: true
  };
  try {
    const response = await requestPromise(options);
    nyrrResponse = await response;
  } catch (error) {
    console.log(error)
  }
  return await nyrrResponse;
};
