var ac = require('./index').init();

ac.apiUrl.check(function (state) {
    console.log(state);
});

ac.projects(function (projects) {
    console.log(projects);
});

ac.projects.archived(function (projects) {
    console.log(projects);
});

ac.project(114, function (project) {
    console.log(project);
});

ac.project(114).hourlyRates(function (rates) {
    console.log(rates);
});

// ac.project(114).edit({
//     'key': value
// }, function () {
//     console.log('added!');
// });

// ac.project.add({
//     'key': value
// }, function () {
//     console.log('added!');
// });

ac.companies(function (companies) {
    console.log(companies);
});
ac.companies.archived(function (companies) {
    console.log(companies);
});
ac.company(256, function (company) {
    console.log(company);
});
ac.company(256).user(12, function (user) {
    console.log(user);
});
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
