// store the count
let count = 0;

// when a user clicks the button, increment the count by 1
document.getElementById("increment-btn").onclick = function addPassenger() {
    count++;
    document.getElementById("count-el").innerText = count;
}

