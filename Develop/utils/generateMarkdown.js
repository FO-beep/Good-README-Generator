function generateMarkdown(data) {
  return `
   # [${data.title}]
(https://github.com/${data.accountname} /
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

  ${data.install}

  \`\`\`

  ${data.install}

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

 <img src = '${data.image}' alt='avatar' style = 'border -radius: 16px' width = '60'/>


Contact [${data.name}] (${data.email}) through Github.


`;
}

module.exports = generateMarkdown;