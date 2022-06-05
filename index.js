let saveLead = document.getElementById("input-btn")
let myLeads = ["www.vi.nl","www.mmafighting","www.youtube"]
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);

})

let listItems = ''

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"
    console.log(listItems);
}

ulEl.innerHTML = listItems

