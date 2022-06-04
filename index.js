let saveLead = document.getElementById("input-btn")
let myLeads = ["www.vi.nl","www.mmafighting","www.youtube"]
let inputEl = document.getElementById("input-el")
console.log(saveLead)

saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);

    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i]);
        
    }
})
