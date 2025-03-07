const fs = require("fs");
const path = require("path");

const fileName = "Love.txt";
const filePath = path.join(__dirname, fileName);
// console.log(__dirname);
// console.log(filePath);

// fs.writeFileSync(filePath, "Hey, How're you?", "utf-8");

// const fileData = fs.readFileSync(filePath, "utf-8");
// console.log(fileData);
// console.log(fs.readFileSync(filePath).toString());

// fs.appendFileSync(filePath, "\nI'm Fine. What about you?", "utf-8");


const updatedFileName = "ILU.txt";
const updatedFilePath = path.join(__dirname, updatedFileName);
// fs.renameSync(filePath, updatedFilePath);

// fs.unlinkSync(updatedFilePath);
