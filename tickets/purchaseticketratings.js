const connectdb = require('../database/connectdb');
const querys = require('../database/querys');
const express = require('express');
const router = express.Router();

router.get('/purchaseTicketRatings', async (req, res) => {
    const ticketId = req.query.ticketId;

    if (!ticketId) {
        res.status(400).send('Geçersiz bilet kimliği');
        return;
    }


    const params = [ticketId];

    try {
        const [rows, fields] = await connectdb.execute(querys.getAllTicketRatingsQuery, params);
        if (rows.length === 0) {
            res.status(200).send([]);
        } else {
            res.status(200).send(rows);
        }
    } catch (error) {
        console.error('Evaluation Error:', error.message);
        res.status(500).send('Evauluation Error');
    }
});

module.exports = router;
