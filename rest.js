var request = require('superagent');

/**
 * Used to fetch (by GET) from the server.
 * 
 * @param  {string}   url      - url of api
 * @param  {string}   endpoint - endpoint of api
 * @param  {string}   apiKey   - api key
 * @param  {Function} cb       - callback function
 */
module.exports.fetch = function (url, endpoint, apiKey, cb) {
    if (typeof cb !== 'function') {
        throw new TypeError('cb must be a function');
    }
    request
        .get(url + '?path_info=' + endpoint + '&auth_api_token=' + apiKey)
        .set('Accept', 'application/json')
        .end(function (res) {
            if (res.status === 200 && res.ok === true) {
                cb(JSON.parse(res.text));
            } else {
                cb(false);
            }
        }
    );
};

/**
 * Used to create (by POST) items on the server.
 * 
 * @param  {string}   url      - url of api
 * @param  {string}   endpoint - endpoint of api
 * @param  {string}   apiKey   - api key
 * @param  {object}   data     - key/value data to post
 * @param  {Function} cb       - callback function
 */
module.exports.create = function (url, endpoint, apiKey, data, cb) {
    if (typeof cb !== 'function') {
        throw new TypeError('cb must be a function');
    }

    request
        .post(url + '?path_info=' + endpoint + '&auth_api_token=' + apiKey)
        .type('form')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept', 'application/json')
        .send(data)
        .end(function (res) {
            if (res.status === 200 && res.ok === true) {
                cb(JSON.parse(res.text));
            } else {
                cb(res.error);
            }
        }
    );
};

/**
 * Used to edit (by POST) existing items on the server.
 * 
 * @param  {string}   url      - url of api
 * @param  {string}   endpoint - endpoint of api
 * @param  {string}   apiKey   - api key
 * @param  {object}   data     - key/value data to post
 * @param  {Function} cb       - callback function
 */
module.exports.edit = function (url, endpoint, apiKey, data, cb) {
    if (typeof cb !== 'function') {
        throw new TypeError('cb must be a function');
    }
    request
        .post(url + '?path_info=' + endpoint + '&auth_api_token=' + apiKey)
        .type('form')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept', 'application/json')
        .send(data)
        .end(function (res) {
            if (res.status === 200 && res.ok === true) {
                cb(JSON.parse(res.text));
            } else {
                cb(res.error);
            }
        }
    );
};
