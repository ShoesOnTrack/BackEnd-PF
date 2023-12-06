/* --------------------------------------------
  file: auth.routes.js
 
  description: This route is intended to make a request from the backend to get the API Token to use for the Auth0 Management
-----------------------------------------------*/


const express = require('express');
const router = express.Router();
const request = require("request");
const axios = require('axios')

const getManagementApiJwt = () => {
  return new Promise( function(resolve, reject) {
    let postOptions = { 
      method: 'POST',
      url: 'https://dev-m5ysfs56sle01rrt.us.auth0.com/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: '{"client_id":"EM5GpR0UPmzevcJ9iOp2BfWzBrNhUYNv","client_secret":"7icLSfieJT4uZU8fhCDrKux4Md6qlgWMQg7pdvvY5F25rJUXtZIo1ldSbjxzHzte","audience":"https://dev-m5ysfs56sle01rrt.us.auth0.com/api/v2/","grant_type":"client_credentials"}'
    };
    
    request(postOptions, function (error, response, body) {
        if (error) {
          reject(error)
        }
        else {
          const { access_token } = JSON.parse(body);
          resolve(access_token);
        }    
    });
  })
}

router.get('/auth', async function (req, res){
  getManagementApiJwt()
    .then( apiToken => {
      res.send(apiToken)
    })
});



module.exports = router;