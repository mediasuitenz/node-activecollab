var rest = require('./rest');

module.exports.init = function (projectId) {
    
    var module = {};

    var fetchProjectSlug = function (projectid, cb) {
        rest.fetch(process.env.API_URL, '/projects/' + projectId, process.env.API_KEY, function (project) {
            console.log(project.name);
            var slug = project.name.replace(/ /g, '-');
            slug = slug.toLowerCase();
            console.log(slug);
            cb(slug);
        });
    };

    var tasks = function (cb) {
        fetchProjectSlug(projectId, function (projectSlug) {
            var endpoint = '/projects/' + projectSlug + '/tasks';
            console.log(endpoint);
            rest.fetch(process.env.API_URL, endpoint, process.env.API_KEY, cb);
        });
        
    };

    tasks.archived = function (cb) {
        fetchProjectSlug(projectId, function (projectSlug) {
            rest.fetch(process.env.API_URL, '/projects/' + projectSlug + '/tasks/archive', process.env.API_KEY, cb);
        });
    };

    tasks.add = function (data, cb) {
        fetchProjectSlug(projectId, function (projectSlug) {
            rest.create(process.env.API_URL, '/projects/' + projectSlug + '/tasks/archive/add', process.env.API_KEY, data, cb);
        });
    };

    var task = function (id, cb) {
        
        //if a callback is provided...
        if (typeof cb === 'function') {
            fetchProjectSlug(projectId, function (projectSlug) {
                rest.fetch(process.env.API_URL, '/projects/' + projectSlug + '/tasks/' + id, process.env.API_KEY, cb);
                return;
            });
        }

        return {
            'edit': function (data, cb) {
                fetchProjectSlug(projectId, function (projectSlug) {
                    rest.edit(process.env.API_URL, '/projects/' + projectSlug + '/tasks/' + id + '/edit', process.env.API_KEY, data, cb);
                });
            }
        };
        

    };

    module.tasks = tasks;

    module.task = task;

    return module;

};


