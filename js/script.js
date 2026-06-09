// Welcome Message

console.log("CVR Event Management System Loaded Successfully");

// Registration Button Alert

function registerSuccess() {
    alert("Registration Submitted Successfully!");
}

// Event Counter Animation

let count = 0;

const counter = setInterval(() => {

    count++;

    if(document.getElementById("eventCounter")){

        document.getElementById("eventCounter").innerHTML = count;
    }

    if(count >= 15){
        clearInterval(counter);
    }

},100);