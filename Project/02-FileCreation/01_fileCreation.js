const readline = require('readline');
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
    console.log("\n01. Create File");
    console.log("02. Read File");
    console.log("03. Exit");
    rl.question("Enter your choice: ", handleInput);
}

const handleInput = (option) => {
    if (option === "1") {
        rl.question("Enter File Name with extension: ", (fname) => {
            let fileName = fname;
            let filePath = path.join(__dirname, fileName);

            rl.question("Enter data you want to add: ", (data) => {
                let fileData = data;

                fs.writeFile(filePath, fileData, "utf-8", (err) => {
                    if (err) {
                        console.log("Error:", err);
                    } else {
                        console.log("File successfully created.");
                    }
                    showMenu();
                });
            });
        });
    } 
    
    else if (option === "2") {
        rl.question("Enter File Name to Read (with extension): ", (fname) => {
            let filePath = path.join(__dirname, fname);

            fs.readFile(filePath, "utf-8", (err, data) => {
                if (err) {
                    console.log("Error: File not found or cannot be read.");
                } else {
                    console.log("\nFile Content:\n" + data);
                }
                showMenu();
            });
        });
    } 
    
    else if (option === "3") {
        console.log("Exiting...");
        rl.close();
    } 
    
    else {
        console.log("Invalid option. Try again.");
        showMenu();
    }
}

showMenu();
