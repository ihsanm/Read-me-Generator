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

  ## description
  ${data.description}

  ## installation
  ${data.installation}

  ## usage

  ${data.usage}

  ## credits
  ${data.credits}

  ## license
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## tests
  ${data.tests}

  ## questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
