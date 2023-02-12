document.getElementById("btn-deposit").addEventListener("click", function(){
    const depositField = document.getElementById("deposit-field");
    const depositAmount = depositField.value;
    const depositTotalElement = document.getElementById("deposit-total");
    const depositTotal = depositTotalElement.innerText;
    const currentDepositTotal = parseFloat(depositAmount) + parseFloat(depositTotal);
    depositTotalElement.innerText = currentDepositTotal;



    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotal = balanceTotalElement.innerText;
    const currentBalanceTotal = parseFloat(depositAmount) + parseFloat(balanceTotal);
    balanceTotalElement.innerText = currentBalanceTotal;


    depositField.value = "";
})


document.getElementById("btn-withdraw").addEventListener("click", function(){
    const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmount = withdrawField.value;
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const withdrawTotal = withdrawTotalElement.innerText;
    const currentWithdraw = parseFloat(withdrawAmount) + parseFloat(withdrawTotal);
    withdrawTotalElement.innerText = currentWithdraw;

    withdrawField.value = "";


    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotal = balanceTotalElement.innerText;
    const currentBalanceTotal = parseFloat(balanceTotal) - parseFloat(withdrawAmount);
    balanceTotalElement.innerText = currentBalanceTotal;
})