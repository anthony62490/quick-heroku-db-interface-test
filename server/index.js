const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const {getData} = require('./controller');

//set port to .env number
const port = process.env.PORT_DEVELOPMENT || 3000;
const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set('db', dbInstance))
  .catch(err => console.log(`error in Massive() - ${err}`));

app.get('/api/stuff', getData);
// app.post();
// app.put();
// app.delete();

app.listen(port, () => console.log(`Listening for requests on port ${port}`));