var config = require('./config'),
    rest = require('./rest'),
    apiUrl = require('./apiUrl'),
    projects = require('./projects'),
    people = require('./people');

module.exports.init = function () {

    /**
     * Load config variables as environment variables
     */
    for (envVar in config) {
        if (config.hasOwnProperty(envVar)) {
            process.env[envVar] = config[envVar];
        }
    }

    /**
     * If the app is in testing mode, then set the api url
     * and api key from the defined testing api url and key
     */
    if (config['ENVIRONMENT'] === 'testing') {
        process.env['API_URL'] = config['TESTING_API_URL'];
        process.env['API_KEY'] = config['TESTING_API_KEY'];
    }

    return {
        'apiUrl': apiUrl,
        'projects': projects.projects,
        'project': projects.project,
        'company': people.company,
        'companies': people.companies
    };

};
