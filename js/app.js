//show the error message
function showErrorMessage(pId1,pId2,pId3,pId4){
    const errorMessage = document.getElementById(pId1).style.display = 'block';
    const errorMessage1 = document.getElementById(pId2).style.display = 'none';
    const errorMessage2 = document.getElementById(pId3).style.display = 'none';
    const errorMessage3 = document.getElementById(pId4).style.display = 'none';
}
//hide the error message
function hideErrorMessage(){
    const errorMessage1 = document.getElementById('empty-alert').style.display = 'none';
    const errorMessage2 = document.getElementById('negative-number').style.display = 'none';
    const errorMessage3 = document.getElementById('more-expenses').style.display = 'none';
    const errorMessage4 = document.getElementById('saving-alert').style.display = 'none';
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
// add event handler in calculate button
document.getElementById('calculate-btn').addEventListener('click',function(){
        const foodInputNumber = getInputNumber('food-input');
        const rentInputNumber = getInputNumber('rent-input');
        const clothesInputNumber = getInputNumber('clothes-input');
        const incomeInputNumber = getInputNumber('income-input');

        if(foodInputNumber && rentInputNumber && clothesInputNumber && incomeInputNumber > 0){
            //update totall expenses
            const totalCost = foodInputNumber + rentInputNumber + clothesInputNumber;
        
            const totallExpenses = document.getElementById('totall-expenses');
            totallExpenses.innerText = totalCost;
            const totallExpensesNumber = parseFloat(totallExpenses.innerText);
            if(totallExpensesNumber > incomeInputNumber){
                const totallExpenses = document.getElementById('totall-expenses');
                totallExpenses.innerText = '00';
                showErrorMessage('more-expenses','negative-number','empty-alert','saving-alert');
            }
            else{
                //update balance
                const balance = incomeInputNumber - totallExpensesNumber;
        
                const totallBalance = document.getElementById('totall-balance');
                totallBalance.innerText = balance;
                hideErrorMessage();
            }  
        }
        else{
            showErrorMessage('negative-number','more-expenses','empty-alert','saving-alert');
        }
})
//add event handler in save button
document.getElementById('save-btn').addEventListener('click',function(){
    const saveInputNumber = getInputNumber('save-input');
    const incomeInputNumber = getInputNumber('income-input');
    const totallBalance = document.getElementById('totall-balance');
    const totallBalanceNumber= parseFloat(totallBalance.innerText);

    if(saveInputNumber && incomeInputNumber && totallBalanceNumber>0){
         // update saving amount
         const incomePercentage = incomeInputNumber / saveInputNumber;
         const savingAmount = document.getElementById('saving-amount');
         savingAmount.innerText = incomePercentage;
         const savingAmountNumber = parseFloat( savingAmount.innerText);
         if(savingAmountNumber > totallBalanceNumber){
            const savingAmount = document.getElementById('saving-amount');
            savingAmount.innerText = '00';
             showErrorMessage('saving-alert','empty-alert','negative-number','more-expenses');
         }
        else{
             //update remaining balance 
         const remainingBalanceNumber = totallBalanceNumber - savingAmountNumber;
         const remainingBalance = document.getElementById('remaining-balance');
         remainingBalance.innerText = remainingBalanceNumber;
         hideErrorMessage();
        }
    }
    else{
        showErrorMessage('empty-alert','negative-number','more-expenses','saving-alert');
       }  
})