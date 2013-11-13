var rest = require('./rest'),
    formatBodyDataForSending = require('./bodyDataFormatter');

var company = function (id, cb) {

    var companyId = id;

    //if a callback is provided...
    if (typeof cb === 'function') {
        rest.fetch(process.env.API_URL, 'people/' + companyId, process.env.API_KEY, cb);
        return;
    }

    var user = function (userId, cb) {
        //if a callback is provided...
        if (typeof cb === 'function') {
            var endpoint = 'people/' + companyId + '/users/' + userId;
            rest.fetch(process.env.API_URL, endpoint, process.env.API_KEY, cb);
            return;
        }
        //otherwise, return a chaining object
        return {
            'edit': function (data, cb) {
                data = formatBodyDataForSending('user', data);
                var endpoint = 'people/' + companyId + '/users/' + userId + '/edit-profile';
                rest.edit(process.env.API_URL, endpoint, process.env.API_KEY, data, cb);
            }
        };
    };

    user.add = function (data, cb) {
        data = formatBodyDataForSending('user', data);
        var endpoint = 'people/' + companyId + '/add-user';
        rest.create(process.env.API_URL, endpoint, process.env.API_KEY, data, cb);
    };

    //otherwise, return a chaining ob;ect
    return {
        'user': user,
        'edit': function (data, cb) {
            data = formatBodyDataForSending('company', data);
            var endpoint = 'people/' + companyId + '/edit';
            rest.edit(process.env.API_URL, endpoint, process.env.API_KEY, data, cb);
        }
    };
};

company.add = function (data, cb) {
    data = formatBodyDataForSending('company', data);
    var endpoint = 'people/add-company';
    rest.create(process.env.API_URL, endpoint, process.env.API_KEY, data, cb);
};

module.exports = company;