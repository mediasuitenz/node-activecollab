var rest = require('./rest'),
    company = require('./company');

// companies(cb)
// companies.archived(cb)
// company.add({}, cb)
// company(:id, cb)
// company(:id).edit({}, cb)
// company(:id).user.add({}, cb)
// company(:id).user(:id, cb)
// company(:id).user(:id).edit({}, cb)

var companies = function (cb) {
    rest.fetch(process.env.API_URL, 'people', process.env.API_KEY, cb);
};

companies.archived = function (cb) {
    rest.fetch(process.env.API_URL, 'people/archive', process.env.API_KEY, cb);
};

module.exports.company = company;
module.exports.companies = companies;


// module.exports.fetch = function (id, cb) {
//     rest.fetch(_url, 'people/' + id, _apiKey, cb);
// };

// module.exports.fetchAll = function (cb) {
//     rest.fetch(_url, 'people', _apiKey, cb);
// };

// module.exports.fetchAllUsersForCompany = function (companyId, cb) {
//     rest.fetch(_url, 'people/' + companyId + '/users', _apiKey, cb);
// };

// module.exports.fetchAllArchived = function (cb) {
//     rest.fetch(_url, 'people/archive', _apiKey, cb);
// };

// module.exports.add = function (data, cb) {
//     rest.create(_url, 'projects/add', _apiKey, data, cb);
// };

// module.exports.getOwnUserId = function () {
//     var apiKeyParts = _apiKey.split('-');
//     return apiKeyParts[0];
// }
