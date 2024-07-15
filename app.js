const nextBtn = document.querySelector("#btn-Next");

const income = document.querySelector("#income");
let arr =[];


nextBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    window.location="home.html"

arr.push(income.value)
console.log(arr); 

localStorage.setItem('data' , arr);
   




    

   



})