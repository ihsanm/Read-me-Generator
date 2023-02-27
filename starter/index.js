const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () => {
    return inquirer.prompt([
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
    }

])
};


// // function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', data)
// }

// // function to initialize program
// function init() {
//     return inquirer.prompt(questions)

// }

// // function call to initialize program
// init()
// .then(userinput => {
//     return generateMarkdown(userinput)
// }).then(readmeInfo => {
//     return writeToFile(readmeInfo);
// });

questions()
  .then((data) => writeFileAsync('Readme.md', generateMarkdown(data)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));