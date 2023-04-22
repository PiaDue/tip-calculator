/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

const billInput = document.querySelector('#billTotalInput');
const tipInput = document.querySelector('#tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tip = Number(tipInput.value);
  const tipAmount = bill * tip / 100;
  const result = bill + tipAmount;
  const perPerson = result / numberOfPeople;
  perPersonTotalDiv.innerText = `$${perPerson.toFixed(2)}`;
}

const increasePeople = () => {
  numberOfPeople++;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
}

const decreasePeople = () => {
  if (numberOfPeople > 1) {
    numberOfPeople--;
    numberOfPeopleDiv.innerText = numberOfPeople;
  }
  calculateBill();
}