// Question - Coding Challenge -2(Jonas Schmedtmann)

/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */ 


//----------------Solution---------------------

/*const mark_Mass = 95;
const mark_height = 1.88;

const john_Mass = 85;
const john_height=1.76;*/

const mark_Mass = 78;
const mark_height = 1.69;

const john_Mass = 92;
const john_height=1.95;


const markBMI= mark_Mass/(mark_height*mark_height);
const johnBMI = john_Mass/(john_height*john_height);



console.log(markBMI , johnBMI);

if (markBMI>johnBMI){

    console.log(`Mark's BMI ( ${markBMI} ) is higher than john's (${johnBMI})`);
}

else{
    console.log(`John's BMI ${johnBMI} is higher than mark's ${markBMI}`)
}