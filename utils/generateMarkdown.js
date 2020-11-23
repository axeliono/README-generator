// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.repoTitle}
  ## Table of Contents:
  [Description](#description)
  [Installation Instructions](#installation-instructions)
  [Test](#test)
  [Images](#images)
  [License](#license)
  [Contributors](#contributors)
  [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.install}

  ## Test
  ${data.test} should be typed into the command terminal in order to test application

  ## Images
  Add Images in the format shown below
  ![Project Screenshot](./imagePath.png)

  ## License
  [![License Used:${data.license}] (https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license}) 

  ## Contributors
  ${data.contribution}

  ## Questions
  Here are my email address and Github username if there are any questions

  email: ${data.email}
  Github: ${data.username}
  `;
}

module.exports = generateMarkdown;
