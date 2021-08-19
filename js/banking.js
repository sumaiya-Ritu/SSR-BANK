// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get amount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositText = depositInput.value;
    // string to number conversion
    const newDepositAmount = parseFloat(newDepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;

    // string to number conversion
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    // update account balance
    const balanceTotal = document.getElementById('balance-total');


    const balanceTotalText = balanceTotal.innerText;
    // string to number
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw handler
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;



    // clear input withdarw
    withdrawInput.value = '';
});