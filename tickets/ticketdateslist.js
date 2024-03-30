const connectdb = require('../database/connectdb');
const express = require('express');
const router = express.Router();

router.get('/ticketDateList', (req, res) => {
    const ticketId = req.query.ticketId;

    if(!ticketId){
        res.status(400).send('Geçersiz kalkış veya varış noktası');
        return;
    }

    let sqlQuery = 'SELECT * FROM ticketdates WHERE TICKETID = ? AND STATUS = 1';
    const params = [ticketId];

    connectdb.query(sqlQuery, params, (error, results, fields) => {
        if(error){
            console.error('Tickets Date List Error: '+ error.message);
            res.status(500).send('Ticket Date List Error');
            return;
        }

        if(results.length === 0){
            res.status(200).send([]);
        }else{
            res.status(200).send(results);
        }
    });
});

module.exports = router;