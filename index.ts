#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

type ansType ={
    userGuess: number
}

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome() {
    let title = await chalkAnimation.rainbow(`|||     Number Guessing Game    |||`);
     await sleep();
     title.stop()
   
}

await welcome()

async function questions(){
    const systemGeneratedNumber = Math.floor(Math.random()* 10)

const guessNumber : ansType = await inquirer.prompt([
    {
        type:'number',
        name:'userGuess',
        message:'enter your guess number',
        
    }
])

const {userGuess} = guessNumber;


if(userGuess){
    if(systemGeneratedNumber===userGuess){
        console.log(chalk.green('You win congratulations'))
    }
    else{
        console.log(chalk.red('Sorry Try again'))
    
    }
}
else{
    console.log( chalk.red('kindly enter Valid input (a number'))
  
}

}

async function again(){
    do{
        await questions();
        var restart : {
            isRepeat:string
        } = await inquirer
        .prompt({
            "type": "input",
            "name": "isRepeat",
            "message": chalk.gray(`Do you want to calculate more?  [Y/N] : `)
        })
    }

 

    while( restart.isRepeat ==="Y" || restart.isRepeat  ==="y" || restart.isRepeat ==="yes" || restart.isRepeat  ==="YES" );
    
}
again();