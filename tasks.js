var rest = require('./rest'),
    formatBodyDataForSending = require('./bodyDataFormatter'),
    fetchProjectSlug = require('./projectSlug');

var apiUrl,
    apiKey;

module.exports.init = function (projectId, url, key) {
    
    apiUrl = url;
    apiKey = key;

    fetchProjectSlug.init(apiUrl, apiKey);

    var module = {};

    var tasks = function (cb) {
        fetchProjectSlug(projectId, function (projectSlug) {
            var endpoint = 'projects/' + projectSlug + '/tasks';
            rest.fetch(apiUrl, endpoint, apiKey, cb);
        });
        
    };

    tasks.archived = function (cb) {
        fetchProjectSlug(projectId, function (projectSlug) {
            rest.fetch(apiUrl, '/projects/' + projectSlug + '/tasks/archive', apiKey, cb);
        });
    };

    tasks.add = function (data, cb) {
        data = formatBodyDataForSending('task', data);
        fetchProjectSlug(projectId, function (projectSlug) {
            rest.create(apiUrl, '/projects/' + projectSlug + '/tasks/add', apiKey, data, cb);
        });
    };

    var task = function (id, cb) {
        
        //if a callback is provided...
        if (typeof cb === 'function') {
            fetchProjectSlug(projectId, function (projectSlug) {
                rest.fetch(apiUrl, '/projects/' + projectSlug + '/tasks/' + id, apiKey, cb);
                return;
            });
        }

        return {
            'edit': function (data, cb) {
                data = formatBodyDataForSending('task', data);
                fetchProjectSlug(projectId, function (projectSlug) {
                    rest.edit(apiUrl, '/projects/' + projectSlug + '/tasks/' + id + '/edit', apiKey, data, cb);
                });
            }
        };
        

    };

    module.tasks = tasks;

    module.task = task;

    return module;

};


