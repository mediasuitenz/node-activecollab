var rest = require('./rest'),
    company = require('./company');

var apiUrl,
    apiKey;

var companies = function (cb) {
    rest.fetch(apiUrl, 'people', apiKey, cb);
};

companies.archived = function (cb) {
    rest.fetch(apiUrl, 'people/archive', apiKey, cb);
};

module.exports.company = company;
module.exports.companies = companies;

module.exports.init = function (url, key) {
    apiUrl = url;
    apiKey = key;
    company.init(apiUrl, apiKey);
};