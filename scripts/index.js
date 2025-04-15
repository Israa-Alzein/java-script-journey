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

    for(let i=0; i<students.length; i++){

        let student =students[i];

        let sum = 0;

        for(let j = 0; j <student.scores.length; j++){
            sum += student.scores[j]
        }

        let average = sum / student.scores.length;

        let g;

        if(average >= 90){
            g = "A";
        }
        else if(average >= 80){
            g = "B";
        }
        else if(average >= 70){
            g = "C";
        }
        else if(average >= 60){
            g = "D";
        }
        else{
            g = "F";
        }


        let report = {
            name: student.name,
            average: average,
            grade: g
        };

        studentsReport.push(report)

        }
    
    return studentsReport;
}

console.log(generateReports(students));




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
        this.ownerName = ownerName;
        this.balance = initialBalance;
        this.history=[];
        this.history.push(`Created account with $${initialBalance}`);
    }

    deposit(amount){
        if(amount <0){
            console.log("the amount should be positive")
            this.history.push(`Failed deposit: invalid amount $${amount}`);
        }
        else{
            this.balance += amount;
            this.history.push(`Deposited $${amount}`);
        }
    }

    withdraw(amount){
        if(this.balance < amount || amount < 0){
            console.log("The amount you want to pay is either larger than your balance or is negative value");
            this.history.push(`Failed withdraw: invalid amount $${amount}`);
        }
        else{
            this.balance -= amount;
            this.history.push(`Withdrew $${amount}`);
        }
    }

    transferTo(anotherAccount, amount){
        if(this.balance < amount || amount < 0){
            console.log("The amount you want to transfer is either larger than your balance or is negative value");
            this.history.push(`Failed transfer: invalid amount $${amount}`);
        }
        else{
            this.balance -= amount;
            anotherAccount.balance += amount;
            this.history.push(`Transfered $${amount} to ${anotherAccount.ownerName}`);
        }
    }

    getSummary(){
        console.log(`${this.ownerName}'s balance is ${this.balance} `);
    }

    printHistory() {
        console.log(`${this.ownerName}'s Transaction History:`);
        this.history.forEach((event) => {
        console.log(`- ${event}`);
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