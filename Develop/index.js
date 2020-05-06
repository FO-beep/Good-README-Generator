///
require('dotenv').config()
const fs = require('fs');
const api = require('./utils/api');
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

//Created promised-based version of function, utilizing the built-in package 
const writeFileAsync = util.promisify(fs.writeFile)


//
function askUser() {
    return inquirer.prompt([
        //Questions
        {

            name: 'userName',
            type: 'input',
            message: 'What is your Github username?'
        },

        {
            name: 'emailaddress',
            type: 'input',
            message: 'What is your Github email address?'
        },

        {
            name: 'title',
            type: 'input',
            message: 'What is the name of your project?'
        },

        {
            name: 'description',
            type: 'input',
            message: 'Please provide a short description of your project.'
        },

        {
            name: 'installation',
            type: 'input',
            message: 'How did you install commands (specifically the installing dependencies) on this project?'
        },

        {
            name: 'test',
            type: 'input',
            message: 'How do you test your project?'
        },

        {
            name: 'usage',
            type: 'input',
            message: 'How do you use your project?'
        },

        {
            name: 'license',
            type: 'input',
            message: 'What license did you use for your project?'
        },

        {
            name: 'contribute',
            type: 'input',
            message: 'How can the user contribute to your project?'
        },


        // ];
    ]);
}











async function init() {
    try {
        const readmefile = await askUser();
        // await api.getUser(readmefile.userName).then(function (result) {
        //     readmefile.image = result.data.avatar_url;
        //     readmefile.name = result.data.name;

        // });

        const gitHubAccount = await api(readmefile.userName)
        console.log(gitHubAccount)

        readmefile.avatar_url = gitHubAccount.data.avatar_url
        const mdfile = generateMarkdown(readmefile);
        await writeFileAsync('README.md', mdfile);
        console.log('README.md created');
    } catch (err) {
        console.log('Error: ' + err);
    }


}

init();