const connectdb = require('../database/connectdb');
const querys = require('../database/querys');
async function updateEvaluationStatus(purchaseId) {
   
    const values = [1, purchaseId]; 

    try {
        const [rows, fields] = await connectdb.execute(querys.putEvaluationTicket, values);
        console.log('Evaluation Status Updated for PurchaseID', purchaseId);
        return Promise.resolve(); 
    } catch (error) {
        console.error('Update Evaluation Status Error:', error.message);
        return Promise.reject(error);
    }
}

module.exports = {
    updateEvaluationStatus
};
