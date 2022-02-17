function showMessage(){
    
}
//get the input field number
function getInputNumber(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputNumber = parseFloat(inputText);
    //clear input field
    input.value = '';
    return inputNumber;
}
//get the span element
// add handler in calculate button
document.getElementById('calculate-btn').addEventListener('click',function(){
        const foodInputNumber = getInputNumber('food-input');
        const rentInputNumber = getInputNumber('rent-input');
        const clothesInputNumber = getInputNumber('clothes-input');
        
        const totalCost = foodInputNumber + rentInputNumber + clothesInputNumber;
        
        const totallExpenses = document.getElementById('totall-expenses');
        totallExpenses.innerText = totalCost;
        const totallExpensesNumber = parseFloat(totallExpenses.innerText);
    
        const incomeInputNumber = getInputNumber('income-input');
    
        const balance = incomeInputNumber - totallExpensesNumber;
    
        const totallBalance = document.getElementById('totall-balance');
        totallBalance.innerText = balance;
})

document.getElementById('save-btn').addEventListener('click',function(){
    // update saving amount
    const saveInputNumber = getInputNumber('save-input');
    const incomeInputNumber = getInputNumber('income-input');

    const incomePercentage = incomeInputNumber / saveInputNumber;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = incomePercentage;
    const savingAmountNumber = parseFloat( savingAmount.innerText);
     //update remaining balance 
    const totallBalance = document.getElementById('totall-balance');
    const totallBalanceNumber= parseFloat(totallBalance.innerText);


     const remainingBalanceNumber = totallBalanceNumber - savingAmountNumber;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingBalanceNumber;
})