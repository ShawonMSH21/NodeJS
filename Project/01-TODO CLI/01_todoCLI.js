import readline from "readline";
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const todoList = [];
console.log("Welcome to your TODO APP");
const showMenu = () =>{
    console.log(`\n01. Add Tasks`);
    console.log(`02. Show Tasks`);
    console.log(`03. Exit`);
    rl.question("Enter your choice : ", handleInputs);
}

const handleInputs = (option) =>{
    if(option === "1"){
        rl.question("Enter the task : ", (task)=>{
            todoList.push(task);
            console.log(`Successfully task added "${task}"`);
            showMenu();
        })
    }
    else if (option === "2"){
        console.log(`Below the list of your tasks : `);
       if(todoList.length === 0){
        console.log(`You do not have any task yet.`);
       } else {
        todoList.forEach((task, index) =>{
            console.log(`${index+1}:: ${task}`);
        })
       }
        showMenu();
    }
    else if (option === "3"){
        console.log("Thanks for using, see you again.");
        rl.close();
    }
    else {
        console.log("Invalid Input");
        showMenu();
    }
}

showMenu();