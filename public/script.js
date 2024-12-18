let socket = io();
let field = document.getElementById("field");
let sendButton = document.getElementById("send");
let content = document.getElementById("content");
let recipient = document.getElementById("recipient");
let named = document.getElementById("named");

let user = {};

document.getElementById("register").addEventListener("submit",(e)=>{
    e.preventDefault();
    socket.emit("register",named.value);
    named.value = "";
})
sendButton.addEventListener("click",(e)=>{
    if(named.value != "" && recipient.value != ""){

        socket.emit("message",recipient.value);
    }else{
        alert("please insert value");
    }
})


