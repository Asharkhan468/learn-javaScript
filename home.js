let data = JSON.parse(localStorage.getItem('data'));

console.log(data);

const div = document.querySelector("#div");

div.innerHTML += `<h2>Your Balance<br><span> ${data} PKR </span></h2>`;

