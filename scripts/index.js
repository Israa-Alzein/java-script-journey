// Question 1: You are given a list of students (list of objects). Each student has:
// a name
// an array of numeric scores

// Write a function generateReports(students) that returns with these calculated fields:

// average

// grade (A if avg ≥ 90, B if 80–89, C if 70–79, D if 60–69, F otherwise)
// You should use at least 2 array methods (lookup array methods in JavaScript)


const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];

function generateReports(students){
    
    let studentsReport = [];

    for(let i=0; i<students.length; i++){                    //time complexity: O(n)

        let student =students[i];                           //time complexity: O(1)

        let sum = 0;                                       //time complexity: O(1)

        for(let j = 0; j <student.scores.length; j++){    // time complexity: O(m)

            sum += student.scores[j]                      //time complexity: O(1)
        }

        let average = sum / student.scores.length;       //time complexity: O(1)

        let g;

        if(average >= 90){                              //time complexity: O(1)
            g = "A";                                    //time complexity: O(1)
        }
        else if(average >= 80){                         //time complexity: O(1)
            g = "B";                                    //time complexity: O(1)
        }
        else if(average >= 70){                         //time complexity: O(1)
            g = "C";                                    //time complexity: O(1)
        }
        else if(average >= 60){                         //time complexity: O(1)
            g = "D";                                    //time complexity: O(1)
        }
        else{                                           //time complexity: O(1)
            g = "F";                                    //time complexity: O(1)
        }


        let report = {                                  //time complexity: O(1)
            name: student.name,
            average: average,
            grade: g
        };

        studentsReport.push(report)                    //time complexity: O(1)

        }
    
    return studentsReport;                            //time complexity: O(1)
}

console.log(generateReports(students));              //time complexity: O(1)


//The total time complexity for q1 is O(n * m)  since it is double loop 



// Question 2: Create a BankAccount class that has:
// constructor(ownerName, initialBalance)
// deposit(amount)
// withdraw(amount)
// ransferTo(anotherAccount, amount) → transfers if enough balance
// getSummary() → returns:
// "John's balance is $400"

// Bonus:
// Store as an array of strings: ["Deposited $200", "Withdrew $50"]
// Add printHistory() method

// Example:
// const acc1 = new BankAccount("John", 500);
// const acc2 = new BankAccount("Sara", 300); 
// acc1.transferTo(acc2, 200); 
// acc1.getSummary(); // John's balance is $300 
// acc2.getSummary(); // Sara's balance is $500 
// acc1.printHistory();


class BankAccount{
    constructor(ownerName, initialBalance){
        this.ownerName = ownerName;                                             //time complexity: O(1)                      
        this.balance = initialBalance;                                          //time complexity: O(1)
        this.history=[];                                                        //time complexity: O(1)
        this.history.push(`Created account with $${initialBalance}`);           //time complexity: O(1)
    }

    deposit(amount){
        if(amount <0){                                                          //time complexity: O(1)
            console.log("the amount should be positive");                       //time complexity: O(1)
            this.history.push(`Failed deposit: invalid amount $${amount}`);     //time complexity: O(1)
        }
        else{                                                                   //time complexity: O(1)
            this.balance += amount;                                             //time complexity: O(1)
            this.history.push(`Deposited $${amount}`);                          //time complexity: O(1)
        }
    }

    withdraw(amount){
        if(this.balance < amount || amount < 0){                               //time complexity: O(1)
            console.log("The amount you want to pay is either larger than your balance or is negative value"); //time complexity: O(1)
            this.history.push(`Failed withdraw: invalid amount $${amount}`);    //time complexity: O(1)
        }
        else{                                                                   //time complexity: O(1)
            this.balance -= amount;                                             //time complexity: O(1)
            this.history.push(`Withdrew $${amount}`);                           //time complexity: O(1)
        }
    }

    transferTo(anotherAccount, amount){
        if(this.balance < amount || amount < 0){                                //time complexity: O(1)
            console.log("The amount you want to transfer is either larger than your balance or is negative value"); //time complexity: O(1)
            this.history.push(`Failed transfer: invalid amount $${amount}`);    //time complexity: O(1)
        }
        else{                                                                   //time complexity: O(1)
            this.balance -= amount;                                             //time complexity: O(1)
            anotherAccount.balance += amount;                                   //time complexity: O(1)
            this.history.push(`Transfered $${amount} to ${anotherAccount.ownerName}`);  //time complexity: O(1)
        }
    }

    getSummary(){
        console.log(`${this.ownerName}'s balance is ${this.balance} `);         //time complexity: O(1)
    }

    printHistory() {
        console.log(`${this.ownerName}'s Transaction History:`);               //time complexity: O(1)
        this.history.forEach((event) => {                                      //time complexity: O(n)
        console.log(`- ${event}`);                                             //time complexity: O(1)
        });
    }
}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300);

acc1.deposit(200);
acc1.withdraw(100);
acc1.transferTo(acc2, 250);

acc1.getSummary(); 
acc2.getSummary(); 

acc1.printHistory();


// total time complexity for question 2 depends on each class used all classes have O(1) except class printHistory() has O(n) since it contains loop on all history statements




// Question 3: Build a simple dynamic to-do list (refer to the shared code on slack for the this question)Assume you have:
// A text input
// A button labeled “Add Task”
// An empty list 

// Requirements:
// When the button is clicked:
// Read the input value
// Add it as a new <li> element to the list
// Clear the input
// Bonus
// When an <li> is clicked, it should be 


const addButton = document.querySelector('.add-btn')


addButton.addEventListener('click', () => {

    const taskInput = document.querySelector('.task-input');

    if(taskInput != ''){

        //create element li and set its content same to textfield
        const li = document.createElement('li');
        li.textContent = taskInput.value;
    
        //put element li inside of element ul
        const taskList = document.querySelector('.task-list');
        taskList.appendChild(li); 
        taskInput.value = '';
    
        //add toggle to change between striking line on the li and removing it
        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

    }

});