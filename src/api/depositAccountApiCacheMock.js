/**
 * Mockery API client facade
 * Uses handwritten simple cache to imitate state of the account on server side
 */

const depositAccountDbMock = {
    transactions: [
        {id: 4, date: '2023-11-15', account: 'PayPal ko***n@gmail.com', amount: 10, balance: 70},
        {id: 3, date: '2023-11-12', account: 'PayPal ko***n@gmail.com', amount: 15, balance: 60},
        {id: 2, date: '2023-11-09', account: 'SEB 8511-2052', amount: 25, balance: 45},
        {id: 1, date: '2023-11-09', account: 'PayPal ko***n@gmail.com', amount: 20, balance: 20}
    ],
    balance: 70,
    lastTxId: 4
};

function getCurrentDate(){
    // Format date as "YYYY-MM-DD"
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`
}

export const deposit = (paymentAccount, depositAmount) => {
    depositAccountDbMock['lastTxId'] += 1
    depositAccountDbMock['balance'] = depositAccountDbMock['balance'] + depositAmount
    depositAccountDbMock['transactions'] = [
        {
            id: depositAccountDbMock['lastTxId'],
            date: getCurrentDate(),
            account: paymentAccount,
            amount: depositAmount,
            balance: depositAccountDbMock['balance']
        },
        ...depositAccountDbMock['transactions']];
};

export const getBalance = () => depositAccountDbMock['balance'];

export const getTransactions = () => depositAccountDbMock['transactions'];

