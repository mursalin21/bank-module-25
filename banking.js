//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = depositField.value;
    // console.log(depositAmount);

    //set amount to deposit
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = parseFloat(newDepositAmount) + parseFloat(depositTotal.innerText);

    //set amount to balance
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(newDepositAmount) + parseFloat(balanceTotal.innerText);

    //clear deposit input field
    depositField.value = '';
});

//handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawField.value;

    //set withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = parseFloat(newWithdrawAmount) + parseFloat(withdrawTotal.innerText);

    //set amount to balance
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(newWithdrawAmount);

    //clear deposit input field
    withdrawField.value = '';
});