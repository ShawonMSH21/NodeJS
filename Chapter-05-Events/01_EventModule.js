const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greetings", (obj)=>{
    console.log(`Assalamu Alaikum/Hello ${obj.username}, How're you today? You have entered your age ${obj.age}, you're a ${obj.prof} by profession. Thank you.`);
})

emitter.emit("greetings", {username : "Shawon Hossain", age : 21, prof: "Student"});