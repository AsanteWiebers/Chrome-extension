let saveLead = document.getElementById("input-btn")
let myLeads = []
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";

    renderLeads()
})

function renderLeads(){

    let listItems = ''

    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
        console.log(listItems);
    }

    ulEl.innerHTML = listItems


}



