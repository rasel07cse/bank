// Adding addEventListener
document.getElementById('btnWtd').addEventListener('click', function () {
    // 2: Get the WithDraw amount from the WithDrawfield
    const withdrawFiled = document.getElementById('Withdraw-Field');
    const WithDraws = withdrawFiled.value;
    const WithDraw = parseFloat(WithDraws);

    // 3: get the curren amount WithDraw total 
    // for non input use innerText  to get tahe text 
    const TotalWithdraw = document.getElementById('WithdrawTotal');
    const CurrenWithdraws = TotalWithdraw.innerText;
    const CurrenWithdraw = parseFloat(CurrenWithdraws);


    // 4: add Number to WithDraw 
    const newWithDrawAmount = WithDraw + CurrenWithdraw;
    TotalWithdraw.innerText = newWithDrawAmount;

    // 5: Get Balance current Total 
    const NewBalance = document.getElementById('Balance-total');
    const NewTotalBalances = NewBalance.innerText;
    const NewTotalBalance = parseFloat(NewTotalBalances);


    // 6: Add the Balance 
    const CurrentBalanc = NewTotalBalance - newWithDrawAmount;
    NewBalance.innerText = CurrentBalanc;


    // 7: clear the WithDraw field 
    withdrawFiled.value = '';
})