// =========================
// OAS MANAGEMENT SYSTEM
// =========================

const STORAGE={

members:"oas_members",

loans:"oas_loans",

contributions:"oas_contributions",

referrals:"oas_referrals",

currentMember:"oas_current_member"

};

function getData(key){

return JSON.parse(localStorage.getItem(key))||[];

}

function saveData(key,data){

localStorage.setItem(key,JSON.stringify(data));

}

function generateMemberID(){

const members=getData(STORAGE.members);

return "MEM-"+String(members.length+1).padStart(6,"0");

}

function generateLoanReference(){

const loans=getData(STORAGE.loans);

return "LN-"+String(loans.length+1).padStart(6,"0");

}

function registerMember(member){

const members=getData(STORAGE.members);

member.memberId=generateMemberID();

member.status="ACTIVE";

member.createdAt=new Date().toISOString();

members.push(member);

saveData(STORAGE.members,members);

return member;

}

function saveLoan(loan){

const loans=getData(STORAGE.loans);

loan.reference=generateLoanReference();

loan.status="Pending";

loan.payment=0;

loan.createdAt=new Date().toISOString();

loans.push(loan);

saveData(STORAGE.loans,loans);

return loan;

}

function updateLoans(loans){

saveData(STORAGE.loans,loans);

}