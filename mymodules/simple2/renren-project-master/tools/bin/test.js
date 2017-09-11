#!/usr/bin/env node

var path = require('path'),
    initProject = require('../lib/initProject'),
    importLib = require('../lib/importlib'),
    addtmp = require('../lib/addtmp'),
    switchProject = require('../lib/switchProject'),
    showlist = require('../lib/list');
    rebuild = require('../lib/rebuild');


switch (process.argv[2]){
    case 'init':
            new initProject();
            break;
    case 'import':
            importLib(process.argv[3]);
            break;
    case 'addtmp':
            addtmp(process.argv[3]);
            break;
    case 'co':
            switchProject(process.argv[3]);
            break;
    case 'list':
            showlist();
            break;
    case 'rebuild':
            rebuild();
            break;
}