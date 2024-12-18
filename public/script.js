let socket = io();
let sendButton = document.getElementById("send");
let content = document.getElementById("content");
let named = document.getElementById("named");

let user = {};

document.getElementById("register").addEventListener("submit", (e) => {
    e.preventDefault();
    socket.emit("register", named.value);
    
})
sendButton.addEventListener("click", (e) => {
    let recipient = document.getElementById("recipient");
    let field = document.getElementById("field");
    if (named.value != "" && recipient != "") {
        console.log(recipient);
        socket.emit("sender", named.value, recipient.value, field.value);
    } else {
        alert(`value ${recipient}`);
    }
})

socket.on("message", (message) => {
    const newLi = document.createElement("li");
    const newContent = document.createTextNode(`${message}`);
    newLi.innerHTML = `${message}`;
    content.appendChild(newLi);
    content.innerHTML = message;

})
