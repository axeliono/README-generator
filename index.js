const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
    validate: (usernameInput) => {
      return usernameInput
        ? true
        : (console.log("Please enter your Github username"), false);
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (emailInput) => {
      return emailInput
        ? true
        : (console.log("Please enter your email"), false);
    },
  },
  {
    type: "input",
    name: "repoTitle",
    message: "What is the name of your repo?",
    validate: (repoInput) => {
      return repoInput
        ? true
        : (console.log("Please enter the repo name!"), false);
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of the application",
    validate: (descrInput) => {
      return descrInput
        ? true
        : (console.log("Please enter a description"), false);
    },
  },

  {
    type: "editor",
    name: "install",
    message: "What are the installation instructions?",
    validate: (instInput) => {
      return instInput
        ? true
        : (console.log("Please enter installation instructions"), false);
    },
  },
  {
    type: "input",
    name: "test",
    message: "What command is used to test the project?",
    validate: (usageInput) => {
      return usageInput
        ? true
        : (console.log("Please enter command to test project"), false);
    },
  },
  {
    type: "checkbox",
    name: "license",
    message: "which license is going to be used, if any",
    choices: ["MIT", "GPLv3", "AGPL"],
    validate: (licenseInput) => {
      return licenseInput ? true : (console.log("Select a license"), false);
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Who has contributed to your project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File has been generated");
  });
}

// function to initialize program
function init() {
  return inquirer.prompt(questions).then((answers) => {
    writeToFile("Pro-ProjectREADME.md", generateMarkdown(answers));
  });
}

// function call to initialize program
init();
