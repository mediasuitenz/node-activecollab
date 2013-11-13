var rest = require('./rest');

/**
 * Fetches a project by project id, then fetches its project slug for use
 * when working with tasks.
 * 
 * @param  {int}   projectid - AC project id
 * @param  {Function} cb     - function to be called once project slug has
 *                             been fetched and calculated
 */
module.exports = function (projectid, cb) {
    rest.fetch(process.env.API_URL, '/projects/' + projectid, process.env.API_KEY, function (project) {
        console.log(project.name);
        var slug = project.name.replace(/ /g, '-');
        slug = slug.toLowerCase();
        console.log(slug);
        cb(slug);
    });
};