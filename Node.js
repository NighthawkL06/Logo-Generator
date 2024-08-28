inquirer.prompt([
    {
        type: 'input',
        name: 'color',
        message: 'Enter the color for the logo:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape for the logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo:',
    }
]).then((answers) => {
    console.log('User input:');
    console.log('Color:', answers.color);
    console.log('Shape:', answers.shape);
    console.log('Text:', answers.text);
});