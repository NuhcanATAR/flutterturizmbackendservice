const connectdb = require('../database/connectdb');
const querys = require('../database/querys');
const express = require('express');
const router = express.Router();

router.get('/purchasedTickets', async (req, res) => {
    const seatNumber = req.query.seatNumber;
    const ticketDateId = req.query.ticketdateid;

    if (!seatNumber || !ticketDateId) {
        res.status(400).send('Geçersiz koltuk numarası veya bilet tarih kimliği');
        return;
    }

 
    const params = [seatNumber, ticketDateId];

    try {
        const [rows, fields] = await connectdb.execute(querys.getAllPurchasedTicketsQuery, params);
        if (rows.length === 0) {
            res.status(200).send([]);
        } else {
            res.status(200).send(rows);
        }
    } catch (error) {
        console.error('Purchased Tickets Error:', error.message);
        res.status(500).send('Purchased Tickets Error');
    }
});

module.exports = router;
