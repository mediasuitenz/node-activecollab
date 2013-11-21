var rest = require('./rest');

var apiUrl,
    apiKey;

/**
 * Fetches a project by project id, then fetches its project slug for use
 * when working with tasks.
 * 
 * @param  {int}   projectid - AC project id
 * @param  {Function} cb     - function to be called once project slug has
 *                             been fetched and calculated
 */
var projectSlug = function (projectid, cb) {
    rest.fetch(apiUrl, 'projects/' + projectid, apiKey, function (project) {
        var slug = project.name.replace(/ /g, '-');
        slug = slug.toLowerCase();
        cb(slug);
    });
};

projectSlug.init = function (url, key) {
    apiUrl = url;
    apiKey = key;
};

module.exports = projectSlug;