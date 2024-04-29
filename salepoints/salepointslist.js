const connectdb = require('../database/connectdb');
const querys = require('../database/querys');
const express = require('express');
const router = express.Router();

router.get('/sales-points', async (req, res) => {
    

    try {
        const [rows, fields] = await connectdb.execute(querys.getAllSalePointsQuery);
        if (rows.length === 0) {
            res.status(200).send([]);
        } else {
            res.status(200).send(rows);
        }
    } catch (error) {
        console.error('Sales Points List Error:', error.message);
        res.status(500).send('Sales Points List Error');
    }
});

module.exports = router;
