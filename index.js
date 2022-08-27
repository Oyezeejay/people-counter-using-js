
 let countEL = document.getElementById("count-el")
let count = 0
function increment(){
    count += 1
    countEL.innerText = count
    console.log(count)
}

let saveEL = document.getElementById("save-el")
function save(){
    let prev = count + " - "
    saveEL.textContent += prev
    countEL.innerText = 0
    count = 0
    
}



