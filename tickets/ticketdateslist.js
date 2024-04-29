const connectdb = require('../database/connectdb');
const querys = require('../database/querys');
const express = require('express');
const router = express.Router();

router.get('/ticketDateList', async (req, res) => {
    const ticketId = req.query.ticketId;

    if (!ticketId) {
        res.status(400).send('Geçersiz bilet kimliği');
        return;
    }

   
    const params = [ticketId];

    try {
        const [rows, fields] = await connectdb.execute(querys.getSelectTicketDatesQuery, params);
        if (rows.length === 0) {
            res.status(200).send([]);
        } else {
            res.status(200).send(rows);
        }
    } catch (error) {
        console.error('Tickets Date List Error:', error.message);
        res.status(500).send('Ticket Date List Error');
    }
});

module.exports = router;
