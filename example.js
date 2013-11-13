var ac = require('./index').init();

// ac.apiUrl.check(function (state) {
//     console.log(state);
// });

// ac.projects(function (projects) {
//     console.log(projects);
// });

// ac.projects.archived(function (projects) {
//     console.log(projects);
// });

// ac.project(114, function (project) {
//     console.log(project);
// });



ac.project(11).tasks(function (tasks) {
    console.log(tasks);
});

// ac.project(11).tasks.archived(function (task) {
//     console.log(task);
// });

// ac.project(11).task(32, function (task) {
//     console.log(task);
// });

// ac.project(11).tasks.add({
//     "task[name]": "test task title please ignore",
//     "task[body]": "test task body please ignore",
//     "task[visibility]": 1,
//     "submitted": "submitted"
// }, function (task) {
//     console.log(task);
// });

// ac.project(11).tasks.add({
//     "name": "test task title please ignore",
//     "body": "test task body please ignore",
//     "visibility": 1
// }, function (task) {
//     console.log(task);
// });

// ac.project(11).task(331).edit({
//     "task[name]": "(edited) test task title please ignore",
//     "task[body]": "(edited) test task body please ignore",
//     "task[visibility]": 1,
//     "submitted": "submitted"
// }, function (task) {
//     console.log(task);
// });

// ac.project(114).hourlyRates(function (rates) {
//     console.log(rates);
// });

// ac.project(114).edit({
//     'key': value
// }, function () {
//     console.log('added!');
// });

/**
 * Creates a project
 * Projects can be created multiple times with same values.
 * Minimum values you must include are 'name' and 'company_id'
 * 
 * @param {object} data
 */
// ac.project.add({
//     'name': 'my test project',
//     'company_id': 170
// }, function (project) {
//     console.log(project);
// });

// ac.companies(function (companies) {
//     console.log(companies);
// });
// ac.companies.archived(function (companies) {
//     console.log(companies);
// });
// ac.company(170, function (company) {
//     console.log(company);
// });
// ac.company(256).user(12, function (user) {
//     console.log(user);
// });
// ac.company.add({
//     "company[name]": "Example Company",
//     "submitted": "submitted"
// }, function (company) {
//     console.log(company);
// });
// ac.company(612).edit({
//     "company[name]": "Example Company EDITED",
//     "submitted": "submitted"
// }, function (company) {
//     console.log(company);
// });
// ac.company(612).user.add({
//     "user[email]": "api@example.com",
//     "user[password]": "testing",
//     "user[password_a]": "testing",
//     "user[type]": "Client",
//     "user[custom_permissions][]": "can_use_api",
//     "user[custom_permissions][]": "can_manage_client_finances",
//     "submitted": "submitted"
// }, function (company) {
//     console.log(company);
// });

// ac.company(612).user(204).edit({
//     "user[email]": "api2@example.com",
//     "user[password]": "testing2",
//     "user[password_a]": "testing2",
//     "user[type]": "Client",
//     "user[custom_permissions][]": "can_use_api",
//     "user[custom_permissions][]": "can_manage_client_finances",
//     "submitted": "submitted"
// }, function (company) {
//     console.log(company);
// });
