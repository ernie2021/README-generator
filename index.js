// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the Title of your project?",
    },
    {
        type: "input",
        name: "problem",
        message: "What problem does this project solve?",
    },
    {
        type: "input",
        name: "projectMotivation",
        message: "Why did you build this project",
    },
    {
        type: "input",
        name: "installationInstruct",
        message: "How do you install the project?",
    },
    {
        type: "input",
        name: "projectUsage",
        message: "Write some Usage Information",
    },
    {
        type: "input",
        name: "ContributionInstruct",
        message: "How can someone contribute to the project?",
    },
    {
        type: "input",
        name: "testInstruct",
        message: "Write some test instructions",
    },
    {
        type: "list",
        name: "license",
        message: "What license do you want?",
        choices: ["Apache License 2.0", "GNU GPLv3", "GNU GPLv2", "MIT", "ISC License", "No License"]
    },
    {
        type: "input",
        name: "gitHubUser",
        message: "What is your GitHub Username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];

const readMeTemplate = (data, licenseBadge) => `
# ${data.projectTitle}
${licenseBadge}
## Description
- ${data.problem}
- ${data.projectMotivation}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installationInstruct}
## Usage
${data.projectUsage}
## Credits
${data.gitHubUser}
## License
${data.license}
## How to Contribute
${data.ContributionInstruct}
## Tests
${data.testInstruct}
## Questions
* [gitHubLink](https://github.com/${data.gitHubUser})
* <a href="mailto:it-support@kth.se">${data.email}</a>`


function writeToFile(data) {
    let licenseBadge = ""
    //This switch validates which badge to display at the top
    switch (data.license) {
        case "Apache License 2.0":
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GNU GPLv3":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            break;
        case "GNU GPLv2":
            licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
            break;
        case "MIT":
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "ISC License":
            licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
            break;
        default:
            break;
    }

// TODO: Create a function to write README file
const newReadMe = readMeTemplate(data, licenseBadge)

fs.writeFile("./newReadMe.md", newReadMe,(err) => {
  
    err ? console.log(err) : console.log('Successfully created newReadMe.md!')
})

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile(data)
    })
}

// Function call to initialize app
init();

