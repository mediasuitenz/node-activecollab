var rest = require('./rest');

/**
 * Main projects function, fetches projects from the
 * AC api based on given api key
 * 
 * @param  {Function} cb - callback
 */
var projects = function (cb) {
    rest.fetch(process.env.API_URL, 'projects', process.env.API_KEY, cb);
};

/*;
 * Fetches archived projects from the AC api based on 
 * given api key
 * 
 * @param  {Function} cb - callback
 */
projects.archived = function (cb) {
    rest.fetch(process.env.API_URL, 'projects/archive', process.env.API_KEY, cb);
};

/*;
 * Fetches hourly rates for a project from the AC server
 * used internally as a chained method on the project
 * object
 * @example
 * project(114).hourlyRates(function (hourlyRates) {});
 * 
 * @param  {number}   id - the id for the project
 * @param  {Function} cb - callback function
 */
var hourlyRates = function (id, cb) {
    rest.fetch(process.env.API_URL, 'projects/' + id + '/hourly-rates', process.env.API_KEY, cb);
};

/*;
 * Edits a project via the AC api, used internally as a chainable
 * method on the project object
 * @example
 * project(114).edit({key: value}, function () {});
 * 
 * @param  {object}   data - key/value data to be used to edit
 *                           the project
 * @param  {Function} cb   - callback function
 */
var edit = function (data, cb) {
    rest.edit(process.env.API_URL, 'projects/' + id + '/edit', process.env.API_KEY, data, cb);
};

/*;
 * Main project object, used for both fetching a single
 * project from AC via the AC api and as a starting point
 * for chained methods @see hourlyRates() and @see edit()
 * To return a project, you should pass the first param, 
 * the id of the project to fetch and a callback function.
 * If the callback function is omitted, it will be assumed that
 * you intend to chain further methods and a project will not be
 * immediately fetched.
 * @example 
 * project(114, function (project) {});
 * project(114).edit({key: value}, function () {});
 * project(114).hourlyRates(function (hourlyRates) {});
 * 
 * @param  {number}   id - id of the project to fetch
 * @param  {Function} cb - callback function
 */
var project = function (id, cb) {
    
    //if a callback is provided...
    if (typeof cb === 'function') {
        rest.fetch(process.env.API_URL, 'projects/' + id, process.env.API_KEY, cb);
        return;
    }
    //otherwise, return a chaining ob;ect
    return {
        'hourlyRates': function (cb) {
            hourlyRates(id, cb);
        },
        'edit': function (data, cb) {
            edit(data, cb);
        }
    };
    
};

/**
 * Add a new project to AC.
 * 
 * @param {object}   data - key/value data to use to create
 *                          a new project with
 * @param {Function} cb   - callback function
 */
project.add = function (data, cb) {
    rest.create(process.env.API_URL, 'projects/add', process.env.API_KEY, data, cb);
};
    
module.exports.project = project;
module.exports.projects = projects


