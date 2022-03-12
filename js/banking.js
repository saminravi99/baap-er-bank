// Click Handler Event for Deposit Button

const depositBtn = document.getElementById('deposit-button');

depositBtn.addEventListener('click', function () {
    const depositInput = parseFloat(document.getElementById('deposit-input').value);

    if(document.getElementById('deposit-input').value == ""){
        alert("Please enter a number");
    }else if(isNaN (document.getElementById('deposit-input').value )  == true ){
        alert('Please enter a number');
        document.getElementById('deposit-input').value = "";
    }else if(depositInput < 0){
        alert('Please enter an amount more than 0');
        document.getElementById('deposit-input').value = "";
    }else{
    const depositTotalString = document.getElementById('deposit-total');
    const depositTotalNumberPrevious = parseFloat(depositTotalString.innerHTML);
    const depositTotalNumberCurrent = depositTotalNumberPrevious + depositInput;
    depositTotalString.innerHTML = depositTotalNumberCurrent;
    document.getElementById('deposit-input').value = "";

        // Optimizing the Total Balance field after depositing amount
    const balanceTotalPrevious = parseFloat(document.getElementById('balance-total').innerHTML); 
    const balanceTotalCurrent = balanceTotalPrevious + depositInput;
    document.getElementById('balance-total').innerHTML = balanceTotalCurrent;
    }
});




// Click Handler Event for Withdraw Button

const withdrawBtn = document.getElementById('withdraw-button');

withdrawBtn.addEventListener('click', function () {
    const withdrawInput = parseFloat(document.getElementById('withdraw-input').value);

    if(document.getElementById('withdraw-input').value == ""){
        alert("Please enter a number");
    }else if(withdrawInput < 0){
        alert('Please enter an amount more than 0');
        document.getElementById('withdraw-input').value = "";
    }else if(withdrawInput > parseFloat(document.getElementById('balance-total').innerHTML)){
        document.getElementById('withdraw-input').value = "";
        alert('You have insufficient funds');
    }else if(isNaN (document.getElementById('withdraw-input').value )  == true ){
        alert('Please enter a number');
        document.getElementById('withdraw-input').value = "";
    }
    else{
        const withdrawTotalString = document.getElementById('withdraw-total');
        const withdrawTotalNumberPrevious = parseFloat(withdrawTotalString.innerHTML);
        const withdrawTotalNumberCurrent = withdrawTotalNumberPrevious + withdrawInput;
        withdrawTotalString.innerHTML = withdrawTotalNumberCurrent;
        document.getElementById('withdraw-input').value = "";

        // Optimizing the Total Balance field after withdrawing amount
        const balanceTotalPrevious = parseFloat(document.getElementById('balance-total').innerHTML);
        const balanceTotalCurrent = balanceTotalPrevious - withdrawInput;
        document.getElementById('balance-total').innerHTML = balanceTotalCurrent;
    }
});