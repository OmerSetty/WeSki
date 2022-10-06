const express = require('express')
const axios = require('axios');
const bodyParse = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3002
const APIsList = require('./APIsList.js');
const union = require('lodash.union');
app.use(bodyParse.json({ extended: true }));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: '*' }));

app.get('/getResorts', async (req, res) => {
  const query = req.query;
  const promises = [];
  APIsList.forEach(api => {
    promises.push(axios.post(api, query))
  });
  try {
    // waiting for all the data from all the APi's to come, and combining all of it to single data array
    const allData = await Promise.allSettled(promises);
    let combinedData = []
    allData.forEach(eachData => {
      combinedData = [...combinedData, eachData.value.data.body.accommodations];
    })
    combinedData = union(...combinedData)
    res.status(200).json(combinedData);
  }
  catch (e) {
    console.log(e);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})