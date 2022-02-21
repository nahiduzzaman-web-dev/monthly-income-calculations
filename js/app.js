document.getElementById('calculate-btn').addEventListener("click", function () {

    const incomeFiled = document.getElementById('income-field');
    const incomeAmount = parseFloat(incomeFiled.value);

    const homeRentFiled = document.getElementById('home-rent');
    const homeRentAmount = parseFloat(homeRentFiled.value);

    const foodCostFiled = document.getElementById('food-cost');
    const foodCostAmount = parseFloat(foodCostFiled.value);

    const clothesCostFiled = document.getElementById('clothes-cost');
    const clothesCostAmount = parseFloat(clothesCostFiled.value);

    const otherCostFiled = document.getElementById('other-cost');
    const otherCostAmount = parseFloat(otherCostFiled.value);



    const totalExpensesField = document.getElementById('total-expenses');
    const balanceField = document.getElementById('balance');

    let error = document.getElementById("error-income");
    let errorHomeRent = document.getElementById("error-home-rent");
    let errorFood = document.getElementById('error-food');
    let errorClothes = document.getElementById('error-clothes');
    let errorOthers = document.getElementById('error-others');


    if (isNaN(incomeAmount) || incomeAmount < 0) {
        error.textContent = "Please enter a valid number";
        error.style.color = "red";
        incomeFiled.style.border = '1px solid red';
    }
    else {
        error.textContent = ''
        error.style.color = "";
        incomeFiled.style.border = ''
    }

    if (isNaN(homeRentAmount) || homeRentAmount < 0) {
        errorHomeRent.textContent = "Please enter a valid number";
        errorHomeRent.style.color = "red";
        homeRentFiled.style.border = '1px solid red'
    }
    else {
        errorHomeRent.textContent = ''
        errorHomeRent.style.color = "";
        homeRentFiled.style.border = ''
    }

    if (isNaN(foodCostAmount) || foodCostAmount < 0) {
        errorFood.textContent = "Please enter a valid number";
        errorFood.style.color = 'red';
        foodCostFiled.style.border = '1px solid red';
    }
    else {
        errorFood.textContent = ''
        errorFood.style.color = ''
        foodCostFiled.style.border = ''
    }

    if (isNaN(clothesCostAmount) || clothesCostAmount < 0) {
        errorClothes.textContent = "Please enter a valid number";
        errorClothes.style.color = 'red';
        clothesCostFiled.style.border = '1px solid red';
    }
    else {
        errorClothes.textContent = ''
        errorClothes.style.color = ''
        clothesCostFiled.style.border = ''
    }
    if (isNaN(otherCostAmount) || otherCostAmount < 0) {
        errorOthers.textContent = "Please enter a valid number";
        errorOthers.style.color = 'red';
        otherCostFiled.style.border = '1px solid red';
    }

    else {
        errorOthers.textContent = ''
        errorOthers.style.color = ''
        otherCostFiled.style.border = ''
    }
    if (incomeAmount >= 0 && homeRentAmount >= 0 && foodCostAmount >= 0 && clothesCostAmount >= 0 && otherCostAmount >= 0) {
        // total expenses calculation
        const totalExpenses = homeRentAmount + foodCostAmount + clothesCostAmount + otherCostAmount;
        if (incomeAmount < totalExpenses) {

            const warningContainer = document.getElementById('warning-container');
            warningContainer.style.display = 'block';

        }
        else {
            totalExpensesField.innerText = totalExpenses;
            // balance calculation
            const balance = incomeAmount - totalExpenses;
            balanceField.innerText = balance;
        }

    }

});

// for closed button
let close = document.getElementById("close-btn");
close.addEventListener('click', function () {

    const warningContainer = document.getElementById('warning-container');
    warningContainer.style.display = 'none'

})