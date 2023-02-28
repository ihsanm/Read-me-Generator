// renders license badge
function LicenseBadge(license) {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${LicenseLink(license)})`
}

// Renders license link
function LicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ${LicenseBadge(data.license)}

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
  This project is covered under the ${data.license} license. To learn more about what this means, click the license button at the top.

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
