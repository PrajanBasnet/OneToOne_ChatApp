const express = require("express");

const { createServer } = require("node:http");

const { Server } =   require("socket.io");
// io is our socket io server
const app = express();
const server = createServer(app);

//capital s is the server constructor in the docs 
app.use(express.static('public'));
const io = new Server(server);

app.set("view engine","ejs");

let user = {};
io.on("connection",(socket)=>{
   
    socket.on("register",(data)=>{
        user[data] = socket.id;
        console.log(data,user);

    })

    socket.on("message",(username)=>{
            if(user[username]){
                console.log(`user name exist ${user[username]}`);
            }else{
                console.log(`There was some problem finding the username ${user[username]}`);
            }
    })


});

app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",(req,res)=>{
    res.render("index");
})
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
