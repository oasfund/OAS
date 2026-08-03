const OAS = {
members: JSON.parse(localStorage.getItem("oas_members")) || [],

save() {
localStorage.setItem("oas_members", JSON.stringify(this.members));
},

generateMemberID() {
return "MEM-" + String(this.members.length + 1).padStart(6,"0");
},

register(member) {
member.memberId = this.generateMemberID();
member.dateCreated = new Date().toLocaleDateString();
this.members.push(member);
this.save();
return member;
}
};