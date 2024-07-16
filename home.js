let data = JSON.parse(localStorage.getItem('data'));

console.log(data);

const div = document.querySelector("#div");
const para = document.querySelector("#para");
const totalExpense = document.querySelector("#total-expense");

const list = document.querySelector(".transaction-list");
const expense = document.querySelector("#expense");
const description = document.querySelector("#description");

let balance = data


div.innerHTML += '$'+`${data}`;

para.innerHTML ="$"+`${data}`;

const addBtn = document.querySelector("#Add-btn");

addBtn.addEventListener('click' , ()=>{
    list.innerHTML += `
     <li class="transaction">
  <span class="expense-name">${description.value}</span>
                <span class="expense-amount text-danger"> $${expense.value} </span>
                <span><i class="fa-solid fa-xmark"></i></span>
</li>
    `;

    let expenseValue = parseInt(expense.value);

   balance -= expenseValue

   console.log(balance);

   localStorage.setItem("currentBalance" , balance);

   let currentBalance = JSON.parse(localStorage.getItem("currentBalance"));

   document.addEventListener("DOMContentLoaded", () => {
     
   });


    expense.value=""
    description.value=""



})







