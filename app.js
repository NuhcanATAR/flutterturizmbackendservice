const express = require('express');
const bodyParser = require('body-parser');
const ticketlist = require('./tickets/ticketlist');
const ticketDateList = require('./tickets/ticketdateslist');
const purchasedTickets = require('./tickets/purchasedticket');
const { ticketCreate } = require('./tickets/ticketcreate');
const { purhcasesCreate } = require('./tickets/purchasesticketratingcreate');
const salepoints = require('./salepoints/salepointslist');
const myTicketList = require('./tickets/mytickets');
const evaluationList = require('./tickets/purchaseticketratings');
const serverSetting = require('./server/server');

const app = express();
const port = serverSetting.portNumber;

app.use(bodyParser.json());

app.use('/api', myTicketList);
app.use('/api', salepoints);
app.use('/api', ticketlist);
app.use('/api', ticketDateList);
app.use('/api', purchasedTickets);
app.use('/api', evaluationList);
app.post('/ticket-create', (req,res) => {
    const {ticketID,  ticketDateID, passangerID, qrCode, seatNumber, ticketDate} = req.body;
    
    ticketCreate(ticketID,  ticketDateID, passangerID, qrCode, seatNumber, ticketDate, (error, ıd) => {
        if(error){
            res.status(500).send('Ticket Create Error');
            return;
        }
        res.status(200).send('Ticket Create Success: '+ ıd);
    });
});
app.post('/evaluation-create', (req,res) => {
    const {ticketId, ratingPoint, explanation} = req.body;
    
    purhcasesCreate(ticketId, ratingPoint, explanation,  (error, ıd) => {
        if(error){
            res.status(500).send('Evaluation Create Error');
            return;
        }
        res.status(200).send('Evaluation Create Success: '+ ıd);
    });
});


app.listen(port,() => {
    console.log('Server Url: http://192.168.1.103:${port} start!');
});
