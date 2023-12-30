document.getElementById('Withdraw-button').addEventListener('click', function () {
    const currentWithdraw = getInputValueById('Withdraw-feild');
    if (isNaN(currentWithdraw)) {
        alert("Please the Valid Amount");
        return;
    }

    const previousWithdraw = getTextElementById('Withdraw-total');
    const previousTotal = getTextElementById('Balance-total');

    if (previousTotal < currentWithdraw) {
        alert("You do not have enough money");
        return;
    }

    const Withdrawfix = currentWithdraw + previousWithdraw;
    setElemetValueById('Withdraw-total', Withdrawfix);

    const Totalfix = previousTotal - currentWithdraw;
    setElemetValueById('Balance-total', Totalfix);
})