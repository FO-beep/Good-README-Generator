function generateMarkdown(data) {
  return `# ${data.title}
(https://github.com/${data.userName} /
  /${data.title})

  ## Description
  ${data.description}

  ## User Story

  \`\`\`

  AS A developer

  I WANT a README generator

  SO THAT I can easily put together a good README for a new project


  \`\`\`


  ## Table of Contents

  *[Installation] (#installation)

  *[Usage] (#usage)

  *[License] (#license)

  *[Tests] (#tests)

  *[Questions] (questions)

  
  ## Installation

  To install necessary depencies, run the following commands:

  \`\`\`

  ${data.installation}

 

  \`\`\`

  ## Usage

 ${data.usage}


 ## License

 This project is licensed under the ${data.license} license.


 ## Contributing

 ${data.contributing}

 ## Tests

 To run tests, run the following commands:

 \`\`\`

 ${data.test}

 \`\`\`

 ## Questions

Contact [${data.userName}] (${data.emailaddress}) through Github.

<img src="${data.image}" width="200" height="200"/>


![${data.userName}](${data.avatar_url})
`;
}

module.exports = generateMarkdown;