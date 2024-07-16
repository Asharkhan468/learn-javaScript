let data = JSON.parse(localStorage.getItem('data'));

const expense = document.querySelector("#expense");
const description = document.querySelector("#description");

//Render user Balance

const div = document.querySelector("#div");

div.innerHTML+=`$${data}`;


//Render user Income


const userIncome = document.querySelector("#user-income");

userIncome.innerHTML=`$${data}`



//Render Expense Details


const list = document.querySelector(".transaction-list");

const addBtn = document.querySelector("#Add-btn").addEventListener("click" , ()=>{
    list.innerHTML += `<li class="transaction">
    <span class="expense-name">${description.value} </span>
    <span class="expense-amount"> ${expense.value}</span>
    <span class="fa-solid fa-xmark"></span>
    </li>`;
    
        


  //Render user expense

  const userExpense = document.querySelector("#total-expense");

  let value = expense.value;

  parseInt(value);

  value+=expense.value;

  

  userExpense.innerHTML=`${value}`


  
   description.value = "";
   expense.value = "";

})
































