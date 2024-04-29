const connectdb = require('../database/connectdb');
const querys = require('../database/querys');
const express = require('express');
const router = express.Router();

router.get('/myTicketList', async (req, res) => {
    const userID = req.query.userID;
    const ticketStatus = req.query.ticketStatus;

    if (!userID) {
        res.status(500).send("Geçersiz kullanıcı kimliği");
        return;
    }

    
    const params = [userID, ticketStatus];

    try {
        const [rows, fields] = await connectdb.execute(querys.getAllMyTicketsQuery, params);
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
