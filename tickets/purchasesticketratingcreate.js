const connectdb = require('../database/connectdb');
const querys = require('../database/querys');
const { updateEvaluationStatus } = require('./updateevaluationstatus');

async function purhcasesCreate(ticketId, ratingPoint, explanation, callback) {
    const ticketIdInt = parseInt(ticketId);
    const ratingPointInt = parseInt(ratingPoint);


    const values = [ticketIdInt, ratingPointInt, explanation];

    try {
        const [rows, fields] = await connectdb.execute(querys.postPurhcasedCreateQuery, values);
        await updateEvaluationStatus(ticketId);
        console.log('Evaluation Success Create: ', rows.insertId);
        callback(null, rows.insertId);
    } catch (error) {
        console.error('Evaluation Create Error:', error.message);
        callback(error);
    }
}

module.exports = {
    purhcasesCreate,
};
