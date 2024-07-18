//Get data from the local storage

let data = JSON.parse(localStorage.getItem("data"));

//Render user balance

const balance = document.querySelector("#balance");

balance.innerHTML=`$${data}`


//Render user Income


const userIncome = document.querySelector("#user-income");

userIncome.innerHTML=`$${data}`


//Render user expense

const transactionList = document.querySelector(".transaction-list");

const expense = document.querySelector("#expense");
const description = document.querySelector("#description");

let transactionArr=[];

let obj={};

const AddBtn = document.querySelector("#Add-btn");


AddBtn.addEventListener('click' , ()=>{

  obj={
    expense:description.value,
    amount:expense.value
  }

  transactionArr.push(obj);


 
   transactionList.innerHTML = "";

   for (let i = 0; i < transactionArr.length; i++) {
     transactionList.innerHTML += `<li class="transaction">
    <span class="expense-name">${transactionArr[i].expense} </span>
    <span class="expense-amount"> ${transactionArr[i].amount}</span>
    <i onclick="deletelist(${i})" class="fa-solid fa-xmark"></i>
    </li>`;
   }
 
  description.value=""
  expense.value=""

  
})



function deletelist(index){
  transactionArr.splice(index,1)

  transactionList.innerHTML = "";

  for (let i = 0; i < transactionArr.length; i++) {
    transactionList.innerHTML += `<li class="transaction">
    <span class="expense-name">${transactionArr[i].expense} </span>
    <span class="expense-amount"> ${transactionArr[i].amount}</span>
    <i onclick="deletelist(${i})" class="fa-solid fa-xmark"></i>
    </li>`;
  }
}








