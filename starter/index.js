const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
    {
        name:"Project-name",
        type: "input",
        message: "What is your projects name?"
    },
    {
        name: "description",
        type: "input",
        message: "give a description about your project"
    },
    {
        name:"installation",
        type: "input",
        message: "what installation is required?"
    },
    {
        name:"usage",
        type: "input",
        message: "what usage does your project have?"
    },
    {
        name:"credits",
        type: "input",
        message: "give credits"
    },
    {
        name:"License",
        type:"checkbox",
        message: "what licenses do you use?",
        choices: [
            { name: 'MIT', value: 'mit' },
            { name: 'Apache', value: 'apache' },
            { name: 'Microsoft Public License', value: 'Microsoft Public License' },
            { name:"n/a", value:"n/a"}
        ]
    }

])
};
questions()

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
