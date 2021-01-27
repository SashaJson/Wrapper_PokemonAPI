'use strict';

const request = require('./mainRequest');

class Request {

    constructor() {
        this._url = 'https://pokeapi.co/api';
    }

    setVersion(version) {
        this._url += '/v' + version + '/';
        return this;
    }

    get(something) {
        this._url += something + '/';
        return this;
    }

    queryParameter(limit, offset) {
        this._url += `?limit=${limit}` + `&offset=${offset}`;
        return this;
    }


    request() {
        return new Promise(resolve => {
            request(this._url).then(res => resolve(res));
        });
    }
}

module.exports = Request;