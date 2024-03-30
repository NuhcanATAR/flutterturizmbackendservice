const connectdb = require('../database/connectdb');
const express = require('express');
const router = express.Router();

router.get('/ticketList', (req, res) => {
    const takeOffCityValue = req.query.takeOff;
    const arrivalCityValue = req.query.arrival;
    const ticketDate = req.query.ticketdate;

   
    if (!takeOffCityValue || !arrivalCityValue) {
        res.status(400).send('Geçersiz kalkış veya varış noktası');
        return;
    }

    let sqlQuery = 'SELECT * FROM tickets WHERE TAKEOFF = ? AND ARRIVAL = ? AND CREATEDATE = ? AND SALESSTATUS = 1';
    const params = [takeOffCityValue, arrivalCityValue, ticketDate];
    
    connectdb.query(sqlQuery, params, (error, results, fields) => {
        if (error) {
            console.error('Ticket List Error:' + error.message);
            res.status(500).send('Ticket List Error');
            return;
        }

        if (results.length === 0) {           
            res.status(200).send([]);
        } else {         
            res.status(200).send(results);
        }
    });

});

module.exports = router;
