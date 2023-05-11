// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utilities/generateMarkdown');
// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instruction.',
        name: 'installation',
        
    }, 
    {
        type: 'input',
        message: 'Enter the usage information',
        name: 'usage',
        
    },
    {
        type: 'list',
        message: 'Please select what licensing you would like to use:',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The Unlicense', 'None'],
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits',
        
    }, 
    {
        type: 'input',
        message: 'Enter Test Instructions.',
        name: 'tests',
        
    },
    {
        type: 'input',
        message: 'Enter how others can contribute.',
        name: 'contribute',
        
    },   
     {
        type: 'input',
        message: 'Enter your email.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'If your project has a lot of features, list them here.',
        name: 'features',
    },    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.error(err);
        } else {
            console.log(`Success READ.ME file: ${fileName} generated!`);
        }
    })
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
        console.log('Success');
    })
}
// Function call to initialize app
init();
