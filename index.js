// import node-fetch
const axios = require('axios');
// set url as constant
const URL = 'https://jsonplaceholder.typicode.com/posts';

axios
    .get(URL)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
