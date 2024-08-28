const { prompt } = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'color',
        message: 'Enter the color for your logo:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape for your logo:',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo:'
    }
];

prompt(questions)
    .then(answers => {
        console.log('Logo details:', answers);
    });