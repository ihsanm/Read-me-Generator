const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
const { type } = require("os");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        
    {
        name: "username",
        type: "input",
        message: "What is your github username?"
    },
    {
        name:"email",
        type:"input",
        message: "What is your email?"
    },
    {
        name:"Title",
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
    },
    {
        name: "contributing",
        type: "input",
        message: ""
    }

])
};


questions()
  .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));