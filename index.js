let myLeads = []
const saveLead = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")
const saveEl = document.getElementById("save-btn")

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads) 
}


saveEl.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads) ) // turning array into string
            render(myLeads)
        })
    
})

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // parse turns string into an array



// Refactor the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

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

deleteEl.addEventListener("dblclick", function(){
    localStorage.clear() // Clearing local storage
    myLeads = [] // clearing my leads
    renderLeads() //clears out dom 
})

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

