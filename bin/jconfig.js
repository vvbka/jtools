/**
 * jcreate.js - jtools
 * Copyright (C) 2016 VVBKA.
 */

'use strict';

var fs = require('fs'),
    path = require('path');

module.exports = [{
    list: ['l', 'List the config.'],
    compile: ['c', 'Show the compiled config.'],
    delete: ['d', 'Delete specified key.', 'string']
}, function (args, opts, config) {
    if (opts.list || opts.compile) {
        console.log(JSON.stringify(opts.compile ? config.compile() : config, null, 2));
    } else if (opts.delete) {
        delete config[opts.delete];
        fs.writeFile(path.resolve(__dirname, '..', '.jtoolsrc'), JSON.stringify(config, null, 2));
    } else {
        var key = args[0], value = args.slice(1).join(" ");
        config[key] = value;
        fs.writeFile(path.resolve(__dirname, '..', '.jtoolsrc'), JSON.stringify(config, null, 2));
    }
}];