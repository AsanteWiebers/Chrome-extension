let myLeads = []
const saveLead = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads() 
}

deleteEl.addEventListener("dblclick", function(){
    myLeads.localStorage.clear()
})

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



