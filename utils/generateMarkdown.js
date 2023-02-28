// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Table of contents
  * [description](#description)
  * [installation](#intsallation)
  * [usage](#usage)
  * [credits](#credits)
  * [license](#license)
  * [contributing](#contributing)
  * [tests](#tests)
  * [questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Do you have any questions about the project?
  GitHub: https://github.com/${data.username}  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
