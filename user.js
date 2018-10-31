var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([

  {
    type: "input",
    name: "movies",
    message: "What movie would you like to know more about?"
  },

  {
    type: "input",
    name: "bands",
    message: "What band would you like to see?",
    choices: ["I made you cookies!", "No lie dude. I'm here to rob you.", "Uh. This is my house... Who are YOU???"]
  },

  {
    type: "input",
    name: "songs",
    message: "What song do you want to hear?",
    choices: ["TV", "Slice of Toast", "Butter Knife"]
  },

  

]).then(function(user) {

  // If the user guesses the password...
  if (user.myPassword === "myHouse") {

    console.log("==============================================");
    console.log("");
    console.log("Well a deal's a deal " + user.name);
    console.log("You can stay as long as you like.");
    console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
    console.log("");
    console.log("==============================================");
  }


  // If the user doesn't guess the password...
  else {

    console.log("==============================================");
    console.log("");
    console.log("Sorry " + user.name);
    console.log("I'm calling the cops!");
    console.log("");
    console.log("==============================================");

  }
});