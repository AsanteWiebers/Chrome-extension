let saveLead = document.getElementById("input-btn")
let myLeads = []
let inputEl = document.getElementById("input-el")
console.log(saveLead)

saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})