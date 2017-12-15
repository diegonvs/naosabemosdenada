'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeVersions = removeVersions;
exports.getFile = getFile;
exports.compile = compile;
var babel = require('babel-core');
var babelDeps = require('babel-deps');
var pkg = require('../package.json');
var deps = pkg.dependencies;
var fs = require('fs');

function removeVersions(obj) {
    var values = [];
    for (var key in obj) {
        values.push(JSON.stringify(key));
    }
    return values;
}

function getFile(depName) {
    if (require('./node_modules/' + depName)) {
        return;
    } else {
        new Error('File doesn\'t exists!');
    }
}

function compile() {
    removeVersions(this.deps).forEach(function (element) {
        babel.transformFile(getFile(element));
    }, this);
}