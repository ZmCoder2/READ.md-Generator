//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license === 'Apache License 2.0') {
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
 } else if (license === 'GNU General Public License v3.0') {
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
 } else if (license === 'MIT License') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
 } else if (license === 'IBM Public License Version 1.0') {
  return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
 } else if (license === 'ISC License (ISC)') {
  return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
 } else if (license === 'The Unlicense') {
  return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
 } else if (license === 'None') {
  return '';
 }
}
// Listed all the images for the Licensing badges
//[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
// [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  } else if (license === 'MIT License') {
    return 'https://opensource.org/license/mit/';
  } else if (license === 'IBM Public License Version 1.0') {
    return 'https://www.eclipse.org/legal/epl-v10.html';
  } else if (license === 'ISC License (ISC)') {
    return 'https://opensource.org/license/isc-license-txt/';
  } else if (license === 'The Unlicense') {
    return 'https://unlicense.org/';
  } else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
// I did not feel this was necessary because I just included the none response to the function up top.

// TODO: Create a function to generate markdown for README
// Table of contents code is from the professional readme guide
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage Information
${data.usage}

## Credits
${data.credits}

## Tests
${data.tests}

## How to Contribute
${data.contribute}

## Email
${data.email}

## Features
${data.features}

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

`;
}
module.exports = generateMarkdown;


