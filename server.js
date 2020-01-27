const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoute');
const app = express();
const port = 5000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res) => res.send('Testing Web Service'));
app.use('/api/v1',weatherRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))