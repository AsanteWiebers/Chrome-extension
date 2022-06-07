let saveLead = document.getElementById("input-btn")
let myLeads = []
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let a = document.createElement("a");
let leadsLinks = document.createTextNode




saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";

    renderLeads()
})

function renderLeads(){

    let listItems = ''

    for (let i = 0; i < myLeads.length; i++) {

        listItems += `<li>
            <a href="${myLeads[i]}" target="_blank">
            ${myLeads[i]}</a> 
                    </li>`
        console.log(listItems);
    }

    ulEl.innerHTML = listItems


}



