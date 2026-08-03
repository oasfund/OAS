// ===============================
// OAS LOAN STORAGE
// ===============================

let loans = JSON.parse(localStorage.getItem("oas_loans")) || [];

function generateLoanReference(){

return "LN-"+String(loans.length+1).padStart(6,"0");

}

function saveLoan(data){

data.reference=generateLoanReference();

data.date=new Date().toLocaleDateString();

loans.push(data);

localStorage.setItem("oas_loans",JSON.stringify(loans));

return data;

}