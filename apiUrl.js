var request = require('superagent'),
    parseString = require('xml2js').parseString;

/**
 * Check that the api url is correct.
 * 
 * @param  {Function} cb - callback function passed a boolean
 *                         true if the api url is a correct one
 *                         false otherwise
 * @throw {TypeError}    - if cb function is not a function
 */
module.exports.check = function (cb) {
    if (typeof cb !== 'function') {
        throw new TypeError('cb must be a function');
    }
    request.get(process.env.API_URL + '?check_if_alive=1').end(function (res) {
        if (res.status === 200 && res.ok === true) {

            parseString(res.text, function (err, result) {

                if (err !== null || typeof result === 'undefined') {
                    cb(false);
                    return;
                }

                cb((result['api_is_alive'] === 'yes'));
            });
        } else {
            cb(false);
        }
    });
};