const getAllSalePointsQuery = 'SELECT * FROM salepoints';
const getAllMyTicketsQuery = 'SELECT t.*, pt.* FROM tickets AS t LEFT JOIN purchasedtickets AS pt ON t.ID = pt.TICKETID WHERE pt.USERID = ? AND pt.TICKETSTATUS = ?';
const getAllPurchasedTicketsQuery = 'SELECT * FROM purchasedtickets WHERE SEATNUMBER = ? AND TICKETDATEID = ?';
const postPurhcasedCreateQuery = 'INSERT INTO evaluation (PURCHASEID, RATING, EXPLANATION) VALUES (?, ?, ?)';
const getAllTicketRatingsQuery = 'SELECT * FROM evaluation WHERE PURCHASEID = ?';
const postTicketCreateQuery = 'INSERT INTO purchasedtickets (TICKETID, TICKETDATEID, USERID, TRAVELSTATUS, QRCODE, PAYMENTSTATUS, SEATNUMBER, TICKETDATE, TICKETCREATEDATE, TICKETSTATUS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
const getSelectTicketDatesQuery = 'SELECT * FROM ticketdates WHERE TICKETID = ? AND STATUS = 1';
const getAllTicketQuery = 'SELECT * FROM tickets WHERE TAKEOFF = ? AND ARRIVAL = ? AND CREATEDATE = ? AND SALESSTATUS = 1';
const putEvaluationTicket = 'UPDATE purchasedtickets SET EVALUATION = ? WHERE ID = ?';

module.exports = {
    getAllSalePointsQuery,
    getAllMyTicketsQuery,
    getAllPurchasedTicketsQuery,
    postPurhcasedCreateQuery,
    getAllTicketRatingsQuery,
    postTicketCreateQuery,
    getSelectTicketDatesQuery,
    getAllTicketQuery,
    putEvaluationTicket
};