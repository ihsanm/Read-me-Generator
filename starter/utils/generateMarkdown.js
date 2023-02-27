// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of contents
  # description 
  # installation
  # usage
  # credits
  # license

  ## description
  ${data.description}

  ##installation
  ${data.installation}

  ##usage

  ${data.usage}

  ##credits
  ${data.credits}

  ##license
  ${data.license}

`;
}

module.exports = generateMarkdown;
