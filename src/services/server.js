const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const requestPromise = require('request-promise');

const app = express();
app.use(cors())
// app.use(parser().urlencoded({extended : true}));
const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server is listening on port: ${port}`));

// var options = {
//   headers: {
//     "Content-type": "application/json",
//     token: "6112c32703f442f0"
//   },
//   method: "POST",
//   uri: "https://results.nyrr.org/api/runners/search",
//   body: {
//     pageIndex: 1,
//     pageSize: 51,
//     searchString: "Rafael Nunez",
//     sortColumn: null,
//     sortDescending: false
//   },
//   json: true
// };

 async function getRunnersByName() {
   let nyrrResponse = {};
   const options = {
     headers: {
       "Content-type": "application/json",
       token: "6112c32703f442f0"
     },
     method: "POST",
     uri: "https://results.nyrr.org/api/runners/search",
     body: {
       pageIndex: 1,
       pageSize: 51,
       searchString: "Rafael Nunez",
       sortColumn: null,
       sortDescending: false
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
 }

app.get("/api/runners", async (req, res) => {
  res.json(await getRunnersByName());
});
