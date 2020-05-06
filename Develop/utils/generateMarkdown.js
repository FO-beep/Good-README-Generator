function generateMarkdown(data) {
  return `
   # [${data.title}]
(https://github.com/${data.userName} /
  /${data.title})

  ## Description
  ${data.description}

  ## User Story

  \`\`\`

  AS A ${data.who}

  I WANT ${data.what}

  SO THAT I ${data.why}

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

 None

 ## Contributing

 ${data.contributing}

 ## Tests

 To run tests, run the following commands:

 \`\`\`

 ${data.test}

 \`\`\`

 ## Questions

Contact [${data.userName}] (${data.emailaddress}) through Github.

![${data.userName}](${data.avatar_url})
`;
}

module.exports = generateMarkdown;