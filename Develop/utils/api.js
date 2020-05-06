const axios = require("axios");


///
axios.defaults.headers.common['Authorization'] = process.env.TOKEN;
/// 
const api = async function (username) {
  const githubUser = `https://api.github.com/users/${username}`;

  try {
    const res = await axios.get(githubUser)
    return res
  } catch (err) {
    console.log(err)
    return err
  }
}

module.exports = api;