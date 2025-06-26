const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const addincome = document.getElementById("addincome");
const addexp = document.getElementById("addexp");
const Description = document.getElementById("description");
const amount = document.getElementById("amount");
const incomeinput = document.getElementById("incomename");
const incomenum = document.getElementById("incomenum");
const expenseinput = document.getElementById("expensename");
const expensenum = document.getElementById("expensenum");
let inc = 0;
let ex = 0;
let bal = 0;
function updateBalance() {
  bal = inc - ex;
  balance.innerHTML = `Balance: ${bal}`;
}
addincome.addEventListener("click", function () {
  const incomevalue = Number(incomenum.value);
  inc += incomevalue;
  income.innerHTML = `Income: ${inc}`;
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.textContent = `${incomeinput.value}`;
  p2.textContent = `+${incomenum.value}`;
  p1.style.color = "green";
  p2.style.color = "green";
  incomeinput.value = "";
  incomenum.value = "";
  Description.appendChild(p1);
  amount.appendChild(p2);
  p1.addEventListener("click", function () {
    p1.remove();
    p2.remove();
    inc -= incomevalue;
    income.innerHTML = `Income: ${inc}`;
    updateBalance();
  });
  updateBalance();
});
addexp.addEventListener("click", function () {
  const expensevalue = Number(expensenum.value);
  ex += expensevalue;
  expense.innerHTML = `Expense: ${ex}`;
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.textContent = `${expenseinput.value}`;
  p2.textContent = `-${expensenum.value}`;
  p1.style.color = "red";
  p2.style.color = "red";
  expenseinput.value = "";
  expensenum.value = "";
  Description.appendChild(p1);
  amount.appendChild(p2);
  p1.addEventListener("click", function () {
    p1.remove();
    p2.remove();
    ex -= expensevalue;
    expense.innerHTML = `Expense: ${ex}`;
    updateBalance();
  });
  updateBalance();
});
