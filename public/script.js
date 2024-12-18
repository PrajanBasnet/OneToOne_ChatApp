let socket = io();
let sendButton = document.getElementById("send");
let content = document.getElementById("content");
let named = document.getElementById("named");

let user = {};

document.getElementById("register").addEventListener("submit",(e)=>{
    e.preventDefault();
    socket.emit("register",named.value);

})
sendButton.addEventListener("click",(e)=>{
    let recipient = document.getElementById("recipient").value;
    let field = document.getElementById("field").value;
    if(named.value != "" && recipient != ""){

        socket.emit("sender",named.value,recipient,field);
    }else{
        alert(`value ${recipient}`);
    }
})

socket.on("message",(message)=>{
    // const newLi = document.createElement("li");
    const newContent = document.createTextNode(`${message}`);
    content.appendChild(newContent);
    content.innerHTML = message;
    console.log(`Data received ${message}`);
})
