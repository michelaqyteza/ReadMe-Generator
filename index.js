// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown =  require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter your projects title",
        name:"Title"
    },
    {
        type:"input",
        message:"Projects description",
        name:"Description"
    },
    {
        type:"input",
        message:"Provide installation instructions",
        name:"Installation"
    },
    {
        type:"input",
        message:"Provide project usage",
        name:"Usage"
    },
    {
        type:"list",
        message:"Provide license or badge link",
        name:"License",
        choices: ["Apache 2.0 License", "BSD 3-Clause License", "BSD 2-Clause License", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3","GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "IBM Public License Version 1.0", "The MIT License", "Mozilla Public License 2.0", "The zlib/libpng License"]
    },
    {
        type:"input",
        message:"Provide contributing parties",
        name:"Contribution"
    },
    {
        type:"input",
        message:"Provide project tests",
        name:"Tests"
    },
    {
        type:"input",
        message:"What is your GitHub username?",
        name:"GitHub"
    },
    {
        type:"input",
        message:"What is your E-mail address?",
        name:"Email"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data ,(err) =>
        err ? console.error(err) : console.log('Success!')
 );

}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
        .then(function(answers){
           const text =  generateMarkdown.generateMarkdown(answers)
           writeToFile("README.md",text)
        })
}

// Function call to initialize app
init();


