const express = require('express');
const bodyParser = require('body-parser');
const  connectionDb = require('./database/connectdb');
const ticketlist = require('./tickets/ticketlist');
const ticketDateList = require('./tickets/ticketdateslist');

const app = express();
const port = 3000;



app.use(bodyParser.json());


app.use('/api', ticketlist);
app.use('/api', ticketDateList);

app.listen(port,() => {
    console.log('Server Url: http://192.168.1.103:${port} start!');
});
