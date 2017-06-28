/**
 * jcreate.js - jtools
 * Copyright (C) 2016 VVBKA.
 */

'use strict';

var fs = require('fs');

module.exports = [{
    main: ['m', 'Set main class to FILE.', 'file'],
    project: ['p', 'Set project name.', 'string']
}, function (args, opts, config) {
    // treat the main class as a regular class during
    // creation
    if (opts.main) {
        args.push(opts.main);
    }

    // create each file
    args.forEach(function (file) {
        if (fs.existsSync(file + '.java')) {
            console.log('Skipping: %s.java (already exists)', file);
            return;
        }
        
        let data = config.compile({
            classname: file,
            filename: file + '.java',
            project_name: opts.project || config.project_name
        });

        fs.writeFile('./' + file + '.java', data[(opts.main === file ? 'main_' : '') + 'file_contents'] + '\n', function (err) {
            if (err) {
                console.error('Error: failed to create: %s.java', file);
                console.error(err);
                process.exit(-1);
            }
        });
    });
}];
