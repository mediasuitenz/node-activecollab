var rest = require('./rest'),
    formatBodyDataForSending = require('./bodyDataFormatter');

var apiUrl,
    apiKey;

var company = function (id, cb) {

    var companyId = id;

    //if a callback is provided...
    if (typeof cb === 'function') {
        rest.fetch(apiUrl, 'people/' + companyId, apiKey, cb);
        return;
    }

    var user = function (userId, cb) {
        //if a callback is provided...
        if (typeof cb === 'function') {
            var endpoint = 'people/' + companyId + '/users/' + userId;
            rest.fetch(apiUrl, endpoint, apiKey, cb);
            return;
        }
        //otherwise, return a chaining object
        return {
            'edit': function (data, cb) {
                data = formatBodyDataForSending('user', data);
                var endpoint = 'people/' + companyId + '/users/' + userId + '/edit-profile';
                rest.edit(apiUrl, endpoint, apiKey, data, cb);
            }
        };
    };

    user.add = function (data, cb) {
        data = formatBodyDataForSending('user', data);
        var endpoint = 'people/' + companyId + '/add-user';
        rest.create(apiUrl, endpoint, apiKey, data, cb);
    };

    //otherwise, return a chaining ob;ect
    return {
        'user': user,
        'edit': function (data, cb) {
            data = formatBodyDataForSending('company', data);
            var endpoint = 'people/' + companyId + '/edit';
            rest.edit(apiUrl, endpoint, apiKey, data, cb);
        }
    };
};

company.add = function (data, cb) {
    data = formatBodyDataForSending('company', data);
    var endpoint = 'people/add-company';
    rest.create(apiUrl, endpoint, apiKey, data, cb);
};

company.init = function (url, key) {
    apiUrl = url;
    apiKey = key;
};

module.exports = company;