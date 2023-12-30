document.getElementById('Deposit-button').addEventListener('click', function () {
    const currentDeposit = getInputValueById('Deposit-feild');
    if (isNaN(currentDeposit)) {
        alert("Please the Valid Amount");
        return;
    }
    const previousDeposit = getTextElementById('Deposit-total');

    const Depositfix = currentDeposit + previousDeposit;
    setElemetValueById('Deposit-total', Depositfix);

    const previousTotal = getTextElementById('Balance-total');

    const Totalfix = currentDeposit + previousTotal;
    setElemetValueById('Balance-total', Totalfix);
})