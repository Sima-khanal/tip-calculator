function calculateTip() {
  var billAmount = parseFloat(document.getElementById('billAmount').value);
  var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

  if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
    document.getElementById('tipAmount').innerHTML = 'Please enter valid bill amount and tip percentage.';
    return;
  }

  var tipAmount = billAmount * (tipPercentage / 100);
  var totalAmount = billAmount + tipAmount;

  document.getElementById('tipAmount').innerHTML = 'Tip Amount: $' + tipAmount.toFixed(2) + '<br>' +
                                                    'Total Amount (including tip): $' + totalAmount.toFixed(2);
}
