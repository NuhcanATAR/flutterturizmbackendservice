const connectdb = require('../database/connectdb');
const querys = require('../database/querys');

async function ticketCreate(ticketID, ticketDateID, passangerID, qrCode, seatNumber, ticketDate, callback) {
    const dateTime = new Date();
    const dayValue = dateTime.getDate();
    const monthValue = dateTime.getMonth() + 1;
    const yearValue = dateTime.getFullYear();
    const hoursValue = dateTime.getHours();
    const minuteValue = dateTime.getMinutes();
    const ticketIdParser = parseInt(ticketID);
    const ticketDateIdParser = parseInt(ticketDateID);
    const seatNumberParser = parseInt(seatNumber);
    const createDateTime = `${dayValue}/${monthValue}/${yearValue} ${hoursValue}:${minuteValue}`;


    const values = [ticketIdParser, ticketDateIdParser, passangerID, "Aktif", qrCode, 1, seatNumberParser, ticketDate, createDateTime, 1];

    try {
        const [rows, fields] = await connectdb.execute(querys.postTicketCreateQuery, values);
        console.log('Ticket Success Create: ', rows.insertId);
        callback(null, rows.insertId);
    } catch (error) {
        console.error('Ticket Create Error:', error.message);
        callback(error);
    }
}

module.exports = {
    ticketCreate,
};
