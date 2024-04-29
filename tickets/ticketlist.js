const connectdb = require('../database/connectdb');
const querys = require('../database/querys');
const express = require('express');
const router = express.Router();

router.get('/ticketList', async (req, res) => {
    const takeOffCityValue = req.query.takeOff;
    const arrivalCityValue = req.query.arrival;
    const ticketDate = req.query.ticketdate;

    if (!takeOffCityValue || !arrivalCityValue || !ticketDate) {
        res.status(400).send('Geçersiz kalkış veya varış noktası veya bilet tarihi');
        return;
    }

    const params = [takeOffCityValue, arrivalCityValue, ticketDate];

    try {
        const [rows, fields] = await connectdb.execute(querys.getAllTicketQuery, params);
        if (rows.length === 0) {
            res.status(200).send([]);
        } else {
            res.status(200).send(rows);
        }
    } catch (error) {
        console.error('Ticket List Error:', error.message);
        res.status(500).send('Ticket List Error');
    }
});

module.exports = router;
