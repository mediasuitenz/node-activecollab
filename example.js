var ac = require('./index').init();

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