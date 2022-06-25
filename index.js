let myLeads = []
let saveLead = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


const leadsFromLocalStorage = localStorage.getItem(JSON.parse("myLeads"))

// parse turns string into an array

console.log(leadsFromLocalStorage)

saveLead.addEventListener('click', function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";

    // saving leads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    // fetching the items from local storage
    console.log(localStorage.getItem("myLeads"))

    renderLeads()
})



function renderLeads(){
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {

        listItems += `
                <li>
                    <a href="${myLeads[i]}" target="_blank">
                         ${myLeads[i]}
                    </a> 
                </li>
                `
        console.log(listItems);
    }
    ulEl.innerHTML = listItems
}



