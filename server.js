const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors)

app.use(express.json())

const header = {
    "Client-ID":"njya11k4qqtwzmymak0dxzkzfp7f4m",
    "Authorization":"Bearer r7mua7uczzrdnoloufa2qsg202l3fv"
  }
  const requestData = {
    // Example of a request body for creating a new game
    name: 'New Game',
    platform: 'PC',
    release_date: '2023-01-01',
    // Add more data fields as required by the API
  };
  axios.get('https://api.rawg.io/api/games?key=faf03104a734484db6f8cdc297d6cb53&name=gta')
  .then(r=>console.log(r.data))

  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });