const fs = require("fs");
const path = require("path");

const directoryLocation =  __dirname;
const fileName = "Nischup.txt";
const filePath = path.join(__dirname, fileName);

// fs.promises.readdir(directoryLocation)
// .then((data)=>{
//     console.log(data);
//     console.log(data.length);
// })
// .catch((err)=>console.error(err));

// fs.promises.writeFile(filePath, "Assalamu Alaikum, How're you?", "utf-8")
// .then(()=>{console.log("File created successfully.")})
// .catch((err)=>{console.error("Error Occurs", err)});

// fs.promises.appendFile(filePath, "\nI'm Fine. What about you?", "utf-8")
// .then(()=>{console.log("Updated successfully.")})
// .catch((err)=>{console.error(err)});

// fs.promises.readFile(filePath, "utf-8")
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.error(err)});

//REVIEW - Rename operation as async (File 02) 

fs.promises.unlink(filePath)
.then(()=>{console.log("Deleted successfully.")})
.catch((err)=>{console.error(err)});