'use strict';

const Request = require('../src/mainClassChainOfReq');

const pokeAPI = new Request();

pokeAPI.setVersion(2).get('evolution-chain').request().then(res => console.log(res));
pokeAPI.setVersion(2).get('evolution-chain').queryParameter(20, 20).request().then(res => console.log(res));

pokeAPI.setVersion(2).get('ability').get('1').request().then(res => console.log(res));
pokeAPI.setVersion(2).get('ability').queryParameter(20, 20).request().then(res => console.log(res));