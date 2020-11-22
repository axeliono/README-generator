const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (nameInput) => {
      return nameInput ? true : (console.log("Please enter your name"), false);
    },
  },
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
    type: "input",
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
    name: "usage",
    message: "How is the application to be used?",
    validate: (usageInput) => {
      return usageInput
        ? true
        : (console.log("Please enter usage instructions"), false);
    },
  },
  {
    type: "checkbox",
    name: "license",
    message: "which license is going to be used, if any",
    choices: ["MIT License", "GNU GPLv3"],
    validate: (licenseInput) => {
      return licenseInput ? true : (console.log("Select a license"), false);
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "What are going to be your contribution guidelines",
    validate: (contrInput) => {
      return contrInput
        ? true
        : (console.log(
            "Please put some guidelines for how others can contribute"
          ),
          false);
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  return inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

// function call to initialize program
init();
