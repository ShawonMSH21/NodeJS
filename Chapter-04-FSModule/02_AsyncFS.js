const fs = require("fs");
const path = require("path");

const fileName = "Ruposhi.txt";
const filePath = path.join(__dirname, fileName);

// fs.writeFile(filePath, "Do you know me..?\n", "utf-8", (err)=>{
//     if(err){
//         console.error(err);
//     } else {console.log("Successfully Writed the File.")}
// })

// fs.readFile(filePath, "utf-8", (err, data)=>{
//     if(err){
//         console.error(err);
//     } else {console.log(data)}
// })

// fs.appendFile(filePath, "Yes, I know you from My High School Life.", "utf-8", (err)=>{
//     if(err) console.error(err);
//     else console.log("File Updated Successfully.");
// })

const newFileName = "Kabeer.txt";
const newFilePath = path.join(__dirname, newFileName);

// fs.rename(filePath, newFilePath, (err)=>{
//     if(err) console.error(err);
//     else console.log("File Renamed Successfully");
// })

// fs.unlink(newFilePath, (err)=>{
//     if(err) console.error(err);
//     else console.log(`${path.basename(newFilePath)} deleted successfully.`);
// })