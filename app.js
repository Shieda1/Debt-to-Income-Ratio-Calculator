// https://www.omnicalculator.com/finance/dti

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const debttoincomeratioRadio = document.getElementById('debttoincomeratioRadio');
const incomeRadio = document.getElementById('incomeRadio');
const recurringmonthlydebtRadio = document.getElementById('recurringmonthlydebtRadio');

let debttoincomeratio;
let income = v1;
let recurringmonthlydebt = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

debttoincomeratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Income';
  variable2.textContent = 'Recurring monthly debt';
  income = v1;
  recurringmonthlydebt = v2;
  result.textContent = '';
});

incomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt to income ratio';
  variable2.textContent = 'Recurring monthly debt';
  debttoincomeratio = v1;
  recurringmonthlydebt = v2;
  result.textContent = '';
});

recurringmonthlydebtRadio.addEventListener('click', function() {
  variable1.textContent = 'Debt to income ratio';
  variable2.textContent = 'Income';
  debttoincomeratio = v1;
  income = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(debttoincomeratioRadio.checked)
    result.textContent = `Debt to income ratio = ${computedebttoincomeratio().toFixed(2)}`;

  else if(incomeRadio.checked)
    result.textContent = `Income = ${computeincome().toFixed(2)}`;

  else if(recurringmonthlydebtRadio.checked)
    result.textContent = `Recurring monthly debt = ${computerecurringmonthlydebt().toFixed(2)}`;
})

// calculation

function computedebttoincomeratio() {
  return (Number(recurringmonthlydebt.value) / Number(income.value)) * 100;
}

function computeincome() {
  return Number(recurringmonthlydebt.value) / (Number(debttoincomeratio.value) / 100);
}

function computerecurringmonthlydebt() {
  return Number(income.value) * (Number(debttoincomeratio.value) / 100);
}