var rest = require('./rest'),
    apiUrlModule = require('./apiUrl'),
    projects = require('./projects'),
    people = require('./people');

module.exports.init = function (apiUrl, apiKey) {

    apiUrlModule.init(apiUrl, apiKey);
    projects.init(apiUrl, apiKey);
    people.init(apiUrl, apiKey);

    return {
        'apiUrl': apiUrlModule,
        'projects': projects.projects,
        'project': projects.project,
        'company': people.company,
        'companies': people.companies
    };

};
