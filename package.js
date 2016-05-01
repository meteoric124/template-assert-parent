Package.describe({
    name: 'meteoric124:template-assert-parent',
    version: '0.1.0-alpha.2',
    // Brief, one-line summary of the package.
    summary: 'A simple package that help enforces template\'s parent template.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/meteoric124/template-assert-parent.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

var package_client_dependencies = [
    "meteoric124:template-scope@0.1.0-beta.4",
    'underscore',
    'templating'
];

Package.onUse(function(api) {
    api.versionsFrom('1.3.2.4');
    api.use([ 'ecmascript' ]);
    api.use(package_client_dependencies, 'client');
    api.mainModule('lib/main.js', 'client');
});