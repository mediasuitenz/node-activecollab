node-activecollab
=================

A node activecollab API wrapper

## Usage

Require and initialize
```
var ac = require('./path_to_index').init(apiUrl, apiKey);
```

Fetch a list of projects
```
ac.projects(function (projects) {
    console.log(projects);
});
```

Fetch a list of archived projects
```
ac.projects.archived(function (projects) {
    console.log(projects);
});
```

Fetch a single project
```
ac.project(114, function (project) {
    console.log(project);
});
```

Fetch hourly rates for a specific project
```
ac.project(114).hourlyRates(function (rates) {
    console.log(rates);
});
```

Edit an existing project
```
ac.project(114).edit({'key': value}, function () {
    console.log('added!');
});
```

Create a new project
```
ac.project.add({'key': value}, function () {
    console.log('added!');
});
```
