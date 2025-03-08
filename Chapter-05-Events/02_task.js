const EventEmitter = require("events");
const emitter = new EventEmitter();
const fs = require("fs");
const path = require("path");


const fileName = "userSummary.log";
const filePath = path.join(__dirname, fileName);


let countEvents = {
    "user-login" : 0
}

emitter.on("user-login", (username)=>{
    countEvents["user-login"]++;
    fs.writeFileSync(filePath, "user-login = 1", "utf-8", (err)=>{
        if(err){
            console.log("Internal Error.");
        }     // not necessary to print success message
    })
   
    console.log(`Welcome ${username}, you successfully logged in.`)
})


//FIXME -  I want to update the counter every time I logged in, but at this moment I can not do it

emitter.emit("user-login", "Shawon");