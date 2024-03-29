#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 30000; //DOLLARS
// transaction limits
let cash_withdrawlamount = 5000;
let cash_2 = 8000;
let with_Draw = 10000;
let transact_ = 500;
let myPin = 7890;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin number  ",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("You Enter the correct Pin code !!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select a transaction",
            type: "list",
            choices: ["WithDraw", "CheckBalance", "Fastcash"]
        }
    ]);
    console.log(operationAns);
    // "FIRST OPERATOR "
    if (operationAns.operation === "WithDraw") {
        let withDrawal = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            },
        ]);
        if (withDrawal.amount < myBalance) {
            myBalance -= withDrawal.amount;
            console.log(`Your remaining balance is :, ${myBalance}`);
        }
        else if (withDrawal.amount > myBalance) {
            console.log("Opps sorry ! its Insufficient balance \n you can't withdraw this amount ");
        }
        //SECOND OPERATOR      
    }
    if (operationAns.operation === "CheckBalance") {
        console.log(`your Currently balance is :, ${myBalance}`);
    }
    //Homework to add "Fast cash operation";
    if (operationAns.operation === "Fastcash") {
        let Amounts_select = await inquirer.prompt([
            {
                name: "amount",
                message: "Please Select Amount",
                type: "list",
                choices: ["5000", "8000", "10000", "500"]
            }
        ]);
        myBalance -= Amounts_select.amount;
        let Received;
        if (Amounts_select.amount === "5000") {
            console.log("Successfully Received :" + cash_withdrawlamount);
        }
        else if (Amounts_select.amount === "500") {
            console.log("Successfully Received :" + transact_);
        }
        else if (Amounts_select.amount === "10000") {
            console.log("Successfully Received :" + with_Draw);
        }
    }
}
else {
    console.log(" oh! Incorrect pin Code \nPlease try again");
}
