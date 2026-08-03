// ===============================
// OAS MANAGEMENT SYSTEM V2 CORE
// ===============================

const STORAGE={

members:"oas_members",

loans:"oas_loans",

contributions:"oas_contributions",

referrals:"oas_referrals",

currentMember:"oas_current_member"

};

// ---------- STORAGE ----------

function getData(key){

return JSON.parse(localStorage.getItem(key))||[];

}

function saveData(key,data){

localStorage.setItem(key,JSON.stringify(data));

}

// ---------- MEMBER ----------

function generateMemberID(){

return "MEM-"+String(getData(STORAGE.members).length+1).padStart(6,"0");

}

function registerMember(member){

let members=getData(STORAGE.members);

member.memberId=generateMemberID();

member.status="ACTIVE";

member.createdAt=new Date().toISOString();

members.push(member);

saveData(STORAGE.members,members);

return member;

}

function updateMember(member){

let members=getData(STORAGE.members);

const index=members.findIndex(x=>x.memberId===member.memberId);

if(index>-1){

members[index]=member;

saveData(STORAGE.members,members);

}

}

// ---------- LOAN ----------

function generateLoanReference(){

return "LN-"+String(getData(STORAGE.loans).length+1).padStart(6,"0");

}

function saveLoan(loan){

let loans=getData(STORAGE.loans);

loan.reference=generateLoanReference();

loan.payment=0;

loan.status="Pending";

loan.createdAt=new Date().toISOString();

loans.push(loan);

saveData(STORAGE.loans,loans);

return loan;

}

function updateLoan(reference,data){

let loans=getData(STORAGE.loans);

const index=loans.findIndex(x=>x.reference===reference);

if(index>-1){

loans[index]={

...loans[index],

...data

};

saveData(STORAGE.loans,loans);

}

}

function getLoan(reference){

return getData(STORAGE.loans).find(

x=>x.reference===reference

);

}

// ---------- CONTRIBUTIONS ----------

function addContribution(record){

let list=getData(STORAGE.contributions);

list.push(record);

saveData(STORAGE.contributions,list);

}

// ---------- REFERRALS ----------

function addReferral(record){

let list=getData(STORAGE.referrals);

list.push(record);

saveData(STORAGE.referrals,list);

}

// ---------- DASHBOARD ----------

function dashboardSummary(){

const members=getData(STORAGE.members);

const loans=getData(STORAGE.loans);

const contributions=getData(STORAGE.contributions);

const referrals=getData(STORAGE.referrals);

return{

members:members.length,

borrowers:loans.length,

pending:loans.filter(x=>x.status==="Pending").length,

approved:loans.filter(x=>x.status==="Approved").length,

released:loans.filter(x=>x.status==="Released").length,

completed:loans.filter(x=>x.status==="Completed").length,

contributions:contributions.reduce((a,b)=>a+Number(b.amount||0),0),

referrals:referrals.reduce((a,b)=>a+Number(b.amount||0),0)

};

}