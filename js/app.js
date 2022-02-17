//get the input field number
function getInputNumber(inputId){
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputNumber = parseFloat(inputText);

    //clear input field
    input.value = '';
    return inputNumber;
}
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