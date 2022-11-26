// 1: Add eventListener of deposite Button 
document.getElementById('btnDpt').addEventListener('click', function () {
    // 2: Get the deposite amount from the depositefield
    const depositefield = document.getElementById('deposite-Field');
    const depositeAmounts = depositefield.value;
    const depositeAmount = parseFloat(depositeAmounts);

    // 3: get the curren amount deposite total 
    // for non input use innerText  to get tahe text 
    const depositeTotal = document.getElementById('deposit-total');
    const previousDepositeTotals = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotals);

    // 4: add Number to deposite 
    const currentDepositeTotal = previousDepositeTotal + depositeAmount;

    depositeTotal.innerText = currentDepositeTotal;

    // 5: Get Balance current Total 
    const BalanceTotal = document.getElementById('Balance-total');
    const TotalBalanceString = BalanceTotal.innerText;
    const TotalBalance = parseFloat(TotalBalanceString);

    // 6: Add the Balance 
    const currentBalance = TotalBalance + depositeAmount;
    BalanceTotal.innerText = currentBalance;


    // 7: clear the deposite field 
    depositefield.value = '';
})