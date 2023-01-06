let count = 0;

//Create a function that increments count;logs "person counted"and updates html element "count" to display current count

function increment(){
    console.log('person counted entering');
    count ++;
    console.log(count); 
    document.getElementById("count").innerText = count;
    

    
    
}
function decrement(){
    console.log('person counted leaving');
    count --;
    console.log(count); 
    document.getElementById("count").innerText = count;
    

    
    
}


//add event listener to increment button and invoke increment function when clicked
document.getElementById('increment').addEventListener("click",increment);
document.getElementById('decrement').addEventListener("click",decrement);
// Create a function save() whuch logs out the count when its called add event listener to save button and call save() onclick

function save(){
    // Create a variable that contains the count and a dash seperator.
    let countDisplay = count;
    // Render the variable in the save-el using innerText.
    let saveEl = document.getElementById("save-el");

    saveEl.textContent += "  " + countDisplay + ";";
    //Do not delete existing content of <p>

    

    //reset count
    count = 0;
    document.getElementById("count").innerText = count;
    
    
    console.log(count);
}

document.getElementById("save-button").addEventListener("click", save);