"use strict";
let welcome = "Welcome to my first COMP1231 Program."
alert(welcome);

let userName;
let programName;
let programYear;

// Console.log() parts are for checking the code in console section in Inspect on browser // 
// In this part users enter their name, The field can't stay empty // 
do{
   let userName = prompt("Please enter your name.");
        if(userName.length > 0){
            document.getElementById("users_name").innerHTML = "Name: " + userName;
            console.log("Name: " + userName);
            break;
        } else{
            alert("Invalid input!! Please enter your name.");
            continue;
        }
}while(userName == null)

// In this part users enter program of their study, The field can't stay empty //
do{
    let programName = prompt("Please enter your program name");
        if(programName.length > 0) {
            document.getElementById("program_of_study").innerHTML = "Program Name: " + programName;
            console.log("Program Name: " + programName);
            break;
        } else{
            alert("Invalid input!! Please enter your program name.");
            continue;
        }
}while(programName == null)

// In this part users enter their year of study, The field can't stay empty or not a number //
do {
    let programYear = prompt("Please enter your years of study");
        if(programYear >= 1 && programYear <= 3) {
            document.getElementById("year_of_study").innerHTML = "Year of Study: " + programYear;
            console.log("Year of Study: " + programYear);
            break;
        }
        else{
            alert("Invalid input!! Please enter your year of study by number!");
            continue;
        }
}while(programYear == null);
        



