//Get data from local storage

let data = JSON.parse(localStorage.getItem("data"));

let transactionArr = JSON.parse(localStorage.getItem('arr')) || [];


//Render user balance

let balance = document.querySelector("#balance");

balance.innerHTML=`$${data}`


//Render User Income

let userIncome = document.querySelector("#user-income");

userIncome.innerHTML=`$${data}`


//Render Expense Details

let expense = document.querySelector('#expense');
let description = document.querySelector("#description");

let transactionList = document.querySelector(".transaction-list");




function renderList(){
  transactionList.innerHTML = "";
  for (let i = 0; i < transactionArr.length; i++) {
    transactionList.innerHTML += `
      <li class="transaction">
        <span class="expense-name">${transactionArr[i].expense} </span>
        <span class="expense-amount">$${transactionArr[i].amount}</span>
        <i class="fa-solid fa-xmark" onclick="deleteList(${i})"></i>
      </li>
    `;
  }

 


}

renderList();


//  totalExpense();


let div = document.querySelector("#div")



function myFunct(){


  if(expense.value=="" && description.value==""){

    alert("Please fill the details..")


  }else{
    let obj = {
      expense: description.value,
      amount: parseInt(expense.value),
    };

    transactionArr.push(obj);

    description.value = "";
    expense.value = "";

    localStorage.setItem("arr", JSON.stringify(transactionArr));

    renderList();

    location.reload();
  }

  }



  


  function deleteList(index) {
    transactionArr.splice(index, 1);
    localStorage.setItem("arr", JSON.stringify(transactionArr));
    location.reload()
    renderList();
    
  }



  //Render user Expense



  let total = 0;

let userExpense = document.querySelector("#total-expense");

  function totalExpense(){
    for(let j = 0; j < transactionArr.length; j++){ 
      total += transactionArr[j].amount;
      }

      renderList()

      userExpense.innerHTML+=`$${total}`

      
  }


  totalExpense()




  







  







