// import node-fetch
const axios = require('axios');
// set url as constant
const URL = 'https://api.hubkoin.com:8443/api/public/config';

axios
    .get(URL)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });