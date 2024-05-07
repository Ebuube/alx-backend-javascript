const Utils = require('./utils');

/**
 * Sends a payment request to the API and logs the total.
 * @param {number} totalAmount The total amount.
 * @param {number} totalShipping The total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Utils.calculate('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
